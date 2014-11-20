Deps.autorun(function(){
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
});