module.exports =

  release:
    options:
      css: [
        '<%= paths.release %>/css/*.css'
      ]
      minify: true
    files: [
      {
        expand: true
        cwd: '<%= paths.release %>'
        src: [
          '**/*.html'
        ]
        dest: '<%= paths.release %>'
      }
    ]
