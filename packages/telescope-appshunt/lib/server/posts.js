Meteor.methods({
  rejectPost: function(post){
    if(isAdmin(Meteor.user())){
      var set = {status: 3};

      var result = Posts.update(post._id, {$set: set}, {validate: false});
    }else{
      flashMessage('You need to be an admin to do that.', "error");
    }
  }
});