module.exports =

  build:
    options:
      loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
      noCache: true
    files:
      '<%= paths.build.src %>/css/blog.css': '<%= paths.src %>/_assets/scss/blog.scss'
      '<%= paths.build.src %>/css/bootstrap.css': '<%= paths.src %>/_assets/bootstrap/imports.scss'
      '<%= paths.build.src %>/css/timeline.css': '<%= paths.src %>/_assets/timeline/timeline.scss'
