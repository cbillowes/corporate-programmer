module.exports =
  build: [
    '<%= paths.build.src %>/*'
  ]
  release: [
    '<%= paths.release %>/*'
    '!<%= paths.release %>/.git'
  ]
  root_images: [
    '<%= paths.img.root %>/**/*'
  ]
  hero_images: [
    '<%= paths.img.heroes %>/*.jpg'
  ]
