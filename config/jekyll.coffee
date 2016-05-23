module.exports =
  options:
    src: '<%= paths.src.app %>'
  build:
    options:
      config: '_config.yml'
      dest: '<%= paths.build.jekyll %>'
  release:
    options:
      config: '_config.yml,_config.build.yml'
      dest: '<%= paths.release %>'