Package.describe({
  name: 'color:iletimerkezi',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  'xml2js': '0.4.18',
  'request': '2.79.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
  api.use('ecmascript');
  api.mainModule('iletimerkezi.js');
});
