module.exports =
  src:
    app: 'app'
    posts: '<%= paths.src.app %>/_process'
    assets: '<%= paths.src.app %>/_assets'
    js: '<%= paths.src.assets %>/js'
  build:
    src: '.tmp/build'
    jekyll: '<%= paths.build.src %>/jekyll'
    tmp: '<%= paths.build.src %>/tmp'
  optimize:
    src: '.tmp/optimize'
    img: '<%= paths.optimize.src %>/img'
    js: '<%= paths.optimize.src %>/js'
    css: '<%= paths.optimize.src %>/css'
  img:
    backup_heroes:
      src: '<%= paths.src.app %>/_assets/img/heroes'
      dest: '.store/heroes'
    backup_root:
      src: '<%= paths.src.app %>/_assets/img/root'
      dest: '.store/img'
    store: '.store/.tmp'
  release: '_release'
  deploy: '.deploy'
