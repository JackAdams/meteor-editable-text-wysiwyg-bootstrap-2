Package.describe({
  name: 'babrahams:editable-text-wysiwyg-bootstrap-2',
  summary: 'Extends the babrahams:editable-text package to include a wysiwyg editor',
  version: '0.4.17',
  git: 'https://github.com/jackadams/meteor-editable-text-wysiwyg-bootstrap-2.git'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0');
  
  api.use('babrahams:editable-text@0.7.25', ['client','server']);
  api.imply('babrahams:editable-text');
  api.use('babrahams:editable-text-wysiwyg@0.4.17', 'client');
  api.use('templating', 'client');
  api.use('blaze', 'client');
  api.use('spacebars', 'client');
  api.use('jquery', 'client');
  api.use('bootstrap@1.0.1', 'client');
  api.use('fortawesome:fontawesome@4.2.0', 'client');
  
  api.add_files('lib/editable_text_wysiwyg_bootstrap_2.css', 'client');
  api.add_files('lib/editable_text_wysiwyg_bootstrap_2.html', 'client');
  api.add_files('lib/editable_text_wysiwyg_bootstrap_2.js', 'client');
  
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:editable-text-wysiwyg-bootstrap-2');
  api.addFiles('editable-text-wysiwyg-tests.js');
});