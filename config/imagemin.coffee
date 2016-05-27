module.exports =

  images_to_store:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.store.tmp %>/img'
        src: '**/*.{jpg,jpeg,png,gif}'
        dest: '<%= paths.store.tmp %>/img'
      }
    ]

  build:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.build.img %>'
        src: '**/*.{jpg,jpeg,png,gif}'
        dest: '<%= paths.build.img %>'
      }
    ]

  heroes:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.img.heroes %>'
        src: '**/*.jpg'
        dest: '<%= paths.serve %>/img'
      }
    ]

  root:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.img.root %>'
        src: '**/*.{png,jpg,gif,jpeg}'
        dest: '<%= paths.serve %>/img'
      }
    ]

  favicons:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.build.src %>/favicons'
        src: '**/*.{png,ico}'
        dest: '<%= paths.serve %>'
      }
    ]
