module.exports =
  sass:
    files: [
      '<%= paths.src.app %>/_assets/scss/**/*.{scss,sass}'
      '<%= paths.src.app %>/_assets/bootstrap/**/*.{scss,sass}'
    ]
    tasks: [ 'concurrent:sass' ]
  jekyll:
    files: [
      '<%= paths.src.app %>/**/*.{html,md,mkd,markdown,xml,rb}'
      '!<%= paths.src.app %>/_posts/*.{md,markdown}'
      '<%= paths.src.app %>/_process/*.{md,markdown}'
      '_config.yml'
    ]
    tasks: [ 'build_jekyll' ]
    options: debounceDelay: 3000
  img:
    files: [ '<%= paths.src.app %>/_assets/post-images/*.{jpg}' ]
    tasks: [ 'concurrent:responsive_images' ]
  js:
    files: [ '<%= paths.src.app %>/js/**/*' ]
    tasks: [ 'copy:scripts' ]
  css:
    files: [ '<%= paths.src.app %>/css/**/*' ]
    tasks: [ 'copy:styles' ]
  gruntfile:
    files: [ 'Gruntfile.js' ]
    tasks: [ 'concurrent:debug' ]
    options: reload: true
  livereload:
    options: livereload: '<%= connect.options.livereload %>'
    files: [
      '<%= paths.build.jekyll %>/**/*.{html,yml,md,mkd,markdown}'
      '<%= paths.build.tmp %>/css/**'
      '<%= paths.build.tmp %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
      '<%= paths.src.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
      '<%= paths.src.app %>/js/**/*.{js}'
    ]
