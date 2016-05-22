module.exports =
  gruntfile:
    files: [
      'Gruntfile.js'
      'config/**/*'
    ]
    tasks: [
      'concurrent:build'
    ]
    options:
      reload: true
  livereload:
    options:
      livereload: '<%= connect.options.livereload %>'
    files: [
      '<%= paths.build %>/**/*'
    ]
  img:
    files: [
      '<%= paths.img.backup_heroes.src %>/*'
    ]
    tasks: [
      'responsive_images:build'
    ]
  store:
    files: [
      '<%= paths.img.backup_heroes.src %>/*'
      '<%= paths.img.backup_root.src %>/*'
    ]
    tasks: [
      'imagemin:store'
    ]
  # sass:
  #   files: [
  #     '<%= paths.src.app %>/_assets/scss/**/*.{scss,sass}'
  #     '<%= paths.src.app %>/_assets/bootstrap/**/*.{scss,sass}'
  #   ]
  #   tasks: [ 'concurrent:sass' ]
  # jekyll:
  #   files: [
  #     '<%= paths.src.app %>/**/*.{html,md,mkd,markdown,xml,rb}'
  #     '!<%= paths.src.app %>/_posts/*.{md,markdown}'
  #     '<%= paths.src.app %>/_process/*.{md,markdown}'
  #     '_config.yml'
  #   ]
  #   tasks: [ 'build_jekyll' ]
  #   options: debounceDelay: 3000
  # js:
  #   files: [ '<%= paths.src.app %>/js/**/*' ]
  #   tasks: [ 'copy:scripts' ]
  # css:
  #   files: [ '<%= paths.src.app %>/css/**/*' ]
  #   tasks: [ 'copy:styles' ]
  # gruntfile:
  #   files: [ 'Gruntfile.js', 'config/**/*' ]
  #   tasks: [ 'concurrent:debug' ]
  #   options: reload: true
