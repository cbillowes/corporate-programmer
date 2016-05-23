module.exports =
  css:
    files: {
      '<%= paths.optimize.css %>/styles.css': [
        '<%= paths.build.tmp %>/css/**/*.css'
      ]
    }
