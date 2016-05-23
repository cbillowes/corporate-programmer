module.exports =
  options:
    sourceMap: true
  js:
    files: {
      '<%= paths.optimize.js %>/scripts.js': [
        '<%= paths.build.tmp %>/js/**/*.js'
      ]
    }
  css:
    files: {
      '<%= paths.optimize.css %>/styles.css': [
        '<%= paths.build.tmp %>/css/**/*.css'
      ]
    }
