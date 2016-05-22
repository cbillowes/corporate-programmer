module.exports =
  build:
    options:
      loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
      noCache: true
    files:
      '<%= paths.build.tmp %>/css/blog.css': '<%= paths.src.app %>/_assets/scss/blog.scss'
      '<%= paths.build.tmp %>/css/bootstrap.css': '<%= paths.src.app %>/_assets/bootstrap/imports.scss'
#   release:
#     options:
#       loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
#       style: 'compressed'
#       noCache: true
#     files:
#       '<%= paths.build.tmp %>/css/blog.css': '<%= paths.src.app %>/_assets/scss/blog.scss'
#       '<%= paths.build.tmp %>/css/bootstrap.css': '<%= paths.src.app %>/_assets/bootstrap/imports.scss'
