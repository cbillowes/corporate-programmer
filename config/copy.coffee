module.exports =

  images_to_store:
    files: [
      {
        expand: true
        cwd: '<%= paths.img.heroes %>'
        src: '**/*.jpg'
        dest: '<%= paths.store.heroes %>'
      }
      {
        expand: true
        cwd: '<%= paths.img.root %>'
        src: '**/*.{png,jpg,gif,jpeg}'
        dest: '<%= paths.store.root %>'
      }
      {
        expand: true
        cwd: '<%= paths.store.root %>'
        src: '**/*'
        dest: '<%= paths.store.tmp %>/img'
      }
      {
        expand: true
        cwd: '<%= paths.img.root %>'
        src: '**/*'
        dest: '<%= paths.build.img %>'
      }
    ]

  serve_assets:
    files: [
      {
        expand: true
        cwd: '<%= paths.build.src %>/css'
        src: '**/*'
        dest: '<%= paths.serve %>/assets/css'
      }
      {
        expand: true
        cwd: '<%= paths.build.src %>/js'
        src: '**/*'
        dest: '<%= paths.serve %>/assets/js'
      }
    ]

  js:
    files: [
      '<%= paths.build.src %>/js/bootstrap.js': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
      '<%= paths.build.src %>/js/jquery-1.12.3.js': '<%= paths.src %>/_assets/js/jquery-1.12.3.js'
      '<%= paths.build.src %>/js/script.js': '<%= paths.src %>/_assets/js/script.js'
    ]

  credits:
    files: [
      'credits.md': '<%= paths.src %>/credits.md'
    ]

  favicons:
    files: [
      {
        expand: true
        cwd: '<%= paths.src %>/_assets/favicons'
        src: [
          '**/*.{ico,png}'
        ]
        dest: '<%= paths.build.src %>/favicons'
      }
    ]

  wip_posts:
    files: [
      {
        expand: true
        cwd: '<%= paths.src %>/_process'
        src: [
          '**/*.markdown'
        ]
        dest: '<%= paths.src %>/_posts'
      }
    ]

  jekyll:
    files: [
      {
        expand: true
        cwd: '<%= paths.build.src %>/jekyll'
        src: [
          '**/*'
        ]
        dest: '<%= paths.serve %>/jekyll'
      }
    ]

  # release:
  #   files: [
  #     {
  #       expand: true
  #       cwd: '<%= paths.optimize.src %>'
  #       src: '**/*'
  #       dest: '<%= paths.release %>'
  #     }
  #   ]

  # deploy:
  #   files: [
  #     {
  #       expand: true
  #       cwd: '<%= paths.optimize.src %>'
  #       src: '**/*'
  #       dest: '<%= paths.deploy %>'
  #     }
  #   ]
