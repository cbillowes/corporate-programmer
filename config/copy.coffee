module.exports =
  build:
    files: [
      'credits.md': '<%= paths.src.app %>/credits.md'
      '<%= paths.build.assets %>/js/bootstrap.js': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
      '<%= paths.build.assets %>/js/jquery-1.12.3.js': '<%= paths.src.js %>/jquery-1.12.3.js'
      '<%= paths.build.assets %>/js/script.js': '<%= paths.src.js %>/script.js'
      {
        expand: true
        cwd: '<%= paths.src.app %>/_assets/favicons'
        src: [
          '**/*.{ico,png}'
        ]
        dest: '<%= paths.build.assets %>'
      }
    ]
  posts:
    files: [
      {
        expand: true
        cwd: '<%= paths.src.posts %>'
        src: '**/*'
        dest: '<%= paths.src.app %>/_posts'
      }
    ]
  images_to_store:
    files: [
      {
        expand: true
        cwd: '<%= paths.img.backup_heroes.src %>'
        src: '**/*.jpg'
        dest: '<%= paths.img.backup_heroes.dest %>'
      }
      {
        expand: true
        cwd: '<%= paths.img.backup_root.src %>'
        src: '**/*.{png,jpg,gif,jpeg}'
        dest: '<%= paths.img.backup_root.dest %>'
      }
      {
        expand: true
        cwd: '<%= paths.img.backup_root.dest %>'
        src: '**/*'
        dest: '<%= paths.img.store %>/img'
      }
    ]
  release:
    files: [
      {
        expand: true
        cwd: '<%= paths.optimize.src %>'
        src: '**/*'
        dest: '<%= paths.release %>'
      }
    ]
  deploy:
    files: [
      {
        expand: true
        cwd: '<%= paths.optimize.src %>'
        src: '**/*'
        dest: '<%= paths.deploy %>'
      }
    ]
