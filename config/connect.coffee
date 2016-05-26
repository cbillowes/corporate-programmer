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
        '<%= paths.build.jekyll %>'
        '<%= paths.img.store %>'
        '<%= paths.build.assets %>'
      ]
  release:
    options:
      open:
        target: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/'
      base: [
        '<%= paths.release %>'
        '<%= paths.img.store %>'
      ]
