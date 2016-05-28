module.exports =
  
  options:
    browsers: [
      'last 3 versions'
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
