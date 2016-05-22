module.exports =
  options:
    port: 9000
    livereload: 35729
    hostname: 'localhost'
  livereload: options:
    open: target: 'http://localhost:9000/'
    base: [
      '<%= paths.build.jekyll %>'
      '<%= paths.build.tmp %>'
      '<%= paths.src.app %>'
    ]
  release: options:
    open: target: 'http://localhost:9000/'
    base: [ '<%= paths.release %>' ]
