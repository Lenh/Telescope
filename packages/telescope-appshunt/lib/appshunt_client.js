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


primaryNav.push(
  {
    template: 'helpLink',
    order: 11
  }
);

secondaryNav.push(
  {
    template: 'navUserThumbnail',
    order: 8
  }
);


for (var i = 0; i < postMeta.length; i++) {
	if (postMeta[i].template == 'postCommentsLink') {
		postMeta.splice(i, 1);
	}	
}

for (var i = 0; i < postModules.length; i++) {
	if (postModules[i].template == 'postShare') {
		postModules[i].order = 60;
	}	
}
/*postModules.push({
  template: 'postUser', 
  position: 'right-right'
});*/