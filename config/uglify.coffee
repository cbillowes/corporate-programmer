module.exports =
  js:
    files: {
      '<%= paths.serve %>/js/scripts.js': [
        '<%= paths.build.src %>/js/jquery-*.js'
        '<%= paths.build.src %>/js/bootstrap.js'
        '<%= paths.build.src %>/js/script.js'
      ]
    }
