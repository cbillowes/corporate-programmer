module.exports =
  gruntfile:
    files: [
      'Gruntfile.js'
      'config/**/*'
    ]
    tasks: [
      'build'
    ]
    options:
      reload: true
  livereload:
    options:
      livereload: '<%= connect.options.livereload %>'
    files: [
      '<%= paths.build.src %>/**/*'
      '<%= paths.optimize.src %>/**/*'
    ]
  img:
    files: [
      '<%= paths.img.backup_heroes.src %>/*'
      '<%= paths.img.backup_root.src %>/*'
    ]
    tasks: [
      'process_images'
      'imagemin:build'
    ]
  sass:
    files: [
      '<%= paths.src.assets %>/**/*.{scss,sass}'
    ]
    tasks: [
      'sass:build'
    ]
  jekyll:
    files: [
      '<%= paths.src.app %>/**/*.{html,md,mkd,markdown,xml,rb}'
      '_config.yml'
    ]
    tasks: [
      'build_jekyll:build'
    ]
    options:
      debounceDelay: 3000
  js:
    files: [
      '<%= paths.src.js %>/**/*'
    ]
    tasks: [
      'copy:scripts'
    ]
  release:
    files: [
      '<%= paths.release %>/**/*' 
    ]
