/*Template[getTemplate('postUser')].helpers({
  authorName: function(){
    return getAuthorName(this);
  },
  profileUrl: function(){
    // note: we don't want the post to be re-rendered every time user properties change
    var user = Meteor.users.findOne(this.userId, {reactive: false});
    if(user)
      return getProfileUrl(user);
  },
  user: function() {
  	var user = Meteor.users.findOne(this.userId, {reactive: false});
  	return user;
  }
  
});*/

Template[getTemplate('postAdminCustom')].helpers({
  postsMustBeApproved: function () {
    return !!getSetting('requirePostsApproval');
  },
  isPending: function(){
    return this.status == STATUS_PENDING;
  }
});

Template[getTemplate('postAdminCustom')].events({
  'click .reject-link': function(e, instance){
    Meteor.call('rejectPost', this);
    e.preventDefault();
  }
});