module.exports =
  release:
    options:
      keepSpecialComments: 0
      check: 'gzip'
    files: [
      {
        expand: true
        cwd: '<%= paths.optimize.css %>'
        src: [
          '*.css'
        ]
        dest: '<%= paths.optimize.css %>'
      }
    ]
