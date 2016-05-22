module.exports =
  src:
    app: 'app'
    posts: '<%= paths.src.app %>/_process'
  build:
    jekyll: '.jekyll'
    tmp: '.tmp'
  release: '_release'
