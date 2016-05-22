module.exports =
  release:
    options:
      base: './'
      css: [
        '<%= paths.optimize.css %>/*.css'
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
