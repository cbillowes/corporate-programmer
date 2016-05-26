module.exports =
  build: [
    '<%= paths.build.jekyll %>/*'
    '<%= paths.build.tmp %>/js/*'
    '<%= paths.build.tmp %>/css/*'
    '<%= paths.build.tmp %>/img/*'
    '<%= paths.build.tmp %>/*.{png,ico}'
  ]
  release: [
    '<%= paths.release %>/*'
    '!<%= paths.release %>/.git'
    '<%= paths.build.tmp %>/*'
  ]
  optimized_images: [
    '<%= paths.optimize.img %>/*'
  ]
  images_to_store: [
    '<%= paths.img.backup_heroes.src %>/*.jpg'
    '<%= paths.img.backup_root.src %>/**/*'
  ]
