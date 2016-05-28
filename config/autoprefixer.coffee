module.exports =

  options:
    browsers: [
      'last 5 versions'
      'ie 8'
      'ie 9'
    ]

  css:
    files: [
      {
        expand: true
        cwd: '<%= paths.release %>/css'
        src: '**/*.css'
        dest: '<%= paths.release %>/css'
      }
    ]
