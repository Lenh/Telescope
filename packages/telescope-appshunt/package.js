Package.describe({
  summary: "Telescope Appshunt customization",
  version: '0.1.0',
  name: "telescope-appshunt"
});

Package.onUse(function (api) {

  api.use([
    'telescope-lib', 
    'telescope-base',
    'iron:router',
    'accounts-ui',
    'deps'
  ], ['client', 'server']);

  api.use([
    'templating',
    'telescope-theme-hubble',
    'telescope-module-share'
  ], ['client']);

  api.use([
	'cmather:handlebars-server'
  ], ['server']);
  
  api.add_files([
    'lib/appshunt_client.js',
    'lib/client/templates/help.html',
    'lib/client/templates/welcome.html',
	'lib/client/templates/post.html',
    'lib/client/templates/post.js',
    'lib/client/templates/nav.html',
    'lib/client/templates/nav.js',   
    'lib/client/css/appshunt.css'
  ], ['client']);
  
  api.add_files([
  	'lib/appshunt_server.js',
  	'lib/server/templates/emailPostPending.handlebars',
  	'lib/server/templates/emailPostApproved.handlebars',
  	'lib/server/posts.js',  	
  	/*'lib/server/test.js',
  	'lib/server/users.js'*/
  ], ['server']);

});
