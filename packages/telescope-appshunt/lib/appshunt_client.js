/*Deps.autorun(function(){
	if(Meteor.user()){
    	var user = Meteor.user();

		if (user.emails && !user.emails[0].verified) {
			Meteor.logout(function(error) {
				console.log("logout success");
				Router.go("/welcome");
			});		
		}
	} else {
    	// logout handler
	}
});*/

Meteor.startup(function () {
  Router.map(function() {
	this.route('help', {
      path: '/help',
      template: 'helpPage'
    });
    this.route('welcome', {
      path: '/welcome',
      template: 'welcomePage'
    });
  });
});


primaryNav.splice(primaryNav.indexOf("search"), 1);

primaryNav.push("helpLink");
primaryNav.push("search");

secondaryNav.unshift("navUserThumbnail");

postModules.push({
  template: 'postUser', 
  position: 'right-right'
});