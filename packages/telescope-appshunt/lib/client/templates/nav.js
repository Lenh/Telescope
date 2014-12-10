Template[getTemplate('navUserThumbnail')].helpers({
  isLoggedIn: function () {
    return !!Meteor.user();
  },
  name: function () {
    return getDisplayName(Meteor.user());
  },
  profileUrl: function () {
    return getProfileUrl(Meteor.user());
  },
  user: function() {
	return Meteor.user();
  }
});