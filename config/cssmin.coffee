module.exports =

  release:
    options:
      keepSpecialComments: 0
      check: 'gzip'
    files: [
      {
        expand: true
        cwd: '<%= paths.release %>/css'
        src: [
          '*.css'
        ]
        dest: '<%= paths.release %>/css'
      }
    ]
