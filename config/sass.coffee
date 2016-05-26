module.exports =
  build:
    options:
      loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
      noCache: true
    files:
      '<%= paths.build.assets %>/css/blog.css': '<%= paths.src.app %>/_assets/scss/blog.scss'
      '<%= paths.build.assets %>/css/bootstrap.css': '<%= paths.src.app %>/_assets/bootstrap/imports.scss'
