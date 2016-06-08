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

  jekyll:
    files: [
      '<%= paths.src %>/**/*.{html,md,mkd,markdown,xml,rb}'
      '!<%= paths.src %>/_process/*'
      '_config.yml'
    ]
    tasks: [
      'process_jekyll'
    ]
    options:
      debounceDelay: 15000

  wip_posts:
    files: [
      '<%= paths.src %>/_process/**/*.markdown'
    ]
    tasks: [
      'process_wip_posts'
    ]

  favicons:
    files: [
      '<%= paths.src %>/_assets/favicons'
    ]
    tasks: [
      'process_favicons'
    ]

  credits:
    files: [
      '<%= paths.src %>/credits.md'
    ]
    tasks: [
      'concurrent:credits'
    ]

  js:
    files: [
      '<%= paths.src %>/_assets/js/**/*.js'
    ]
    tasks: [
      'process_js'
    ]

  sass:
    files: [
      '<%= paths.src %>/_assets/bootstrap/*.scss'
      '<%= paths.src %>/_assets/scss/*.scss'
      '<%= paths.src %>/_assets/timeline/*.scss'
    ]
    tasks: [
      'process_sass'
    ]

  heroes_images:
    options:
      event: [
        'added'
        'changed'
      ]
    files: [
      '<%= paths.img.heroes %>/*'
    ]
    tasks: [
      'images_heroes'
    ]

  root_images:
    options:
      event: [
        'added'
        'changed'
      ]
    files: [
      '<%= paths.img.root %>/*'
    ]
    tasks: [
      'images_root'
    ]

  fonts:
    files: [
      '<%= paths.src %>/_assets/fonts/*.{eot,svg,ttf,woff}'
    ]
    tasks: [
      'copy:fonts'
      'copy:serve_assets'
    ]

  livereload:
    options:
      livereload: '<%= connect.options.livereload %>'
    files: [
      '<%= paths.serve %>/**/*'
    ]
