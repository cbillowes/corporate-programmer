module.exports =

  css:
    files: {
      '<%= paths.serve %>/css/styles.css': [
        '<%= paths.build.src %>/css/blog.css'
        '<%= paths.build.src %>/css/bootstrap.css'
      ]
      '<%= paths.serve %>/css/timeline.css': [
        '<%= paths.build.src %>/css/timeline.css'
      ]
    }
