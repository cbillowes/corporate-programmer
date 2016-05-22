module.exports =
  options: src: '<%= paths.src.app %>'
  debug: options:
    config: '_config.yml'
    dest: '<%= paths.build.jekyll %>'
    verbose: true
  release: options:
    config: '_config.yml,_config.build.yml'
    dest: '<%= paths.release %>'
