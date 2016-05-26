module.exports =
  build: [
    '<%= paths.build.jekyll %>/*'
  ]
  assets: [
    '<%= paths.build.assets %>/'
  ]
  release: [
    '<%= paths.release %>/*'
    '!<%= paths.release %>/.git'
    '<%= paths.build.assets %>/*'
  ]
  optimized_images: [
    '<%= paths.optimize.img %>/*'
  ]
  images_to_store: [
    '<%= paths.img.backup_heroes.src %>/*.jpg'
    '<%= paths.img.backup_root.src %>/**/*'
  ]
