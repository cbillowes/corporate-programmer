module.exports =
  release:
    options:
      base: './'
      css: [
        '<%= paths.release %>/css/blog.css'
        '<%= paths.release %>/css/bootstrap.css'
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
