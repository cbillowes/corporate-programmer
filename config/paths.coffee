module.exports =

  src: 'app'

  store:
    tmp: '.store/.tmp'
    heroes: '.store/heroes'
    root: '.store/img'

  build:
    src: '.build'
    img: '.build/img'

  serve: '.serve'

  release: '_release'

  deploy: '.deploy'

  img:
    heroes: '<%= paths.src %>/_assets/img/heroes'
    root:   '<%= paths.src %>/_assets/img/root'
