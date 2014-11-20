Meteor.startup(function () {
  Router.map(function() {
	this.route('help', {
      path: '/help',
      template: 'helpPage'
    });
    this.route('about', {
      path: '/about',
      template: 'aboutPage'
    });
    this.route('welcome', {
      path: '/welcome',
      template: 'welcomePage'
    });
  });
});

primaryNav.push('helpLink');
primaryNav.push('aboutLink');