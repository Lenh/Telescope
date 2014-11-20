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
    'templating'
  ], ['client']);

  api.add_files([
    'lib/client/templates/about.html',
    'lib/client/templates/help.html',
    'lib/client/templates/welcome.html',
    'lib/client/static_pages.js',
    'lib/client/appshunt.js'
  ], ['client']);
  
  api.add_files([
  	'lib/server/test.js',
  	'lib/server/users.js'
  ], ['server']);

});
