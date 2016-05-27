module.exports =
  options:
    port: 9000
    livereload: 35729
    hostname: 'localhost'
  livereload:
    options:
      open:
        target: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/'
      base: [
        '<%= paths.serve %>/jekyll'
        '<%= paths.serve %>/assets'
        '<%= paths.serve %>'
        '<%= paths.store.tmp %>'
      ]
  release:
    options:
      open:
        target: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/'
      base: [
        '<%= paths.release %>'
        '<%= paths.store.tmp %>'
      ]
