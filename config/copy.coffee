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

  serve_imgs:
    files: [
      {
        expand: true
        cwd: '<%= paths.build.img %>'
        src: '**/*'
        dest: '<%= paths.serve %>/img'
      }
      {
        expand: true
        cwd: '<%= paths.build.img %>'
        src: '**/*'
        dest: '<%= paths.store.tmp %>/img'
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
      {
        expand: true
        cwd: '<%= paths.build.src %>/fonts'
        src: '**/*'
        dest: '<%= paths.serve %>/assets/fonts'
      }
    ]

  css:
    files: [
       '<%= paths.build.src %>/css/syntax-highlighter.css': '<%= paths.src %>/_assets/syntax-highlighter/prism.css'
    ]

  js:
    files: [
      '<%= paths.build.src %>/js/bootstrap.js': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
      '<%= paths.build.src %>/js/jquery-1.12.3.js': '<%= paths.src %>/_assets/js/jquery-1.12.3.js'
      '<%= paths.build.src %>/js/script.js': '<%= paths.src %>/_assets/js/script.js'
      '<%= paths.build.src %>/js/syntax-highlighter.js': '<%= paths.src %>/_assets/syntax-highlighter/prism.js'
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

  fonts:
    files: [
      {
        expand: true
        cwd: '<%= paths.src %>/_assets/timeline/fonts'
        src: [
          '**/*.{eot,svg,ttf,woff}'
        ]
        dest: '<%= paths.build.src %>/fonts'
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

  release:
    files: [
      {
        expand: true
        cwd: '<%= paths.serve %>/css'
        src: '**/*'
        dest: '<%= paths.release %>/css'
      }
      {
        expand: true
        cwd: '<%= paths.serve %>/img'
        src: '**/*'
        dest: '<%= paths.release %>/img'
      }
      {
        expand: true
        cwd: '<%= paths.serve %>/js'
        src: '**/*'
        dest: '<%= paths.release %>/js'
      }
      {
        expand: true
        cwd: '<%= paths.serve %>/favicons'
        src: '**/*'
        dest: '<%= paths.release %>/'
      }
      {
        expand: true
        cwd: '<%= paths.serve %>/fonts'
        src: '**/*'
        dest: '<%= paths.release %>/fonts'
      }
    ]
