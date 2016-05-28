module.exports =

  options:
    src: '<%= paths.src %>'

  build:
    options:
      config: '_config.yml'
      dest: '<%= paths.build.src %>/jekyll'
      
  release:
    options:
      config: '_config.yml,_config.build.yml'
      dest: '<%= paths.release %>'
