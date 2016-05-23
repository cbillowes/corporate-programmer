module.exports =
  js:
    files: {
      '<%= paths.optimize.js %>/scripts.js': [
        '<%= paths.src.js %>/jquery-*.js'
        'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
        '<%= paths.src.js %>/script.js'
      ]
    }
