Template.post_submit.showForm = function(){
   // because the Session variable will most probably be undefined the first time
   return !Session.get('formSubmitted');
}

AutoForm.hooks({
  submitPostForm: {

    before: {
      submitPost: function(doc, template) {

        template.$('button[type=submit]').addClass('loading');

        var post = doc;

        // ------------------------------ Checks ------------------------------ //

        if (!Meteor.user()) {
          flashMessage(i18n.t('you_must_be_logged_in'), 'error');
          return false;
        }

        // ------------------------------ Callbacks ------------------------------ //

        // run all post submit client callbacks on properties object successively
        post = postSubmitClientCallbacks.reduce(function(result, currentFunction) {
            return currentFunction(result);
        }, post);

		Session.set("formSubmitted", true);

        return post;
      }
    },

    onSuccess: function(operation, post, template) {      
      template.$('button[type=submit]').removeClass('loading');
      trackEvent("new post", {'postId': post._id});
      if (post.status === STATUS_PENDING) {
        flashMessage(i18n.t('thanks_your_post_is_awaiting_approval'), 'success');
      }
      
      setTimeout(function() {
	      Router.go('post_page', {_id: post._id});
          Session.set('formSubmitted',false);
      }, 3000);
    },

    onError: function(operation, error, template) {
      template.$('button[type=submit]').removeClass('loading');
      flashMessage(error.message.split('|')[0], 'error'); // workaround because error.details returns undefined
      clearSeenMessages();
      // $(e.target).removeClass('disabled');
      if (error.error == 603) {
        var dupePostId = error.reason.split('|')[1];
        Router.go('/posts/'+dupePostId);
      }
    }

  }
});