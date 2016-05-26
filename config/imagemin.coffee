module.exports =
  init:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.img.store %>/img'
        src: '**/*.{jpg,jpeg,png,gif}'
        dest: '<%= paths.img.store %>/img'
      }
    ]
  build:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.build.tmp %>/img'
        src: '**/*.{jpg,jpeg,png,gif}'
        dest: '<%= paths.optimize.img %>'
      }
    ]
  images_to_store:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.img.backup_heroes.dest %>'
        src: '**/*.jpg'
        dest: '<%= paths.img.backup_heroes.dest %>'
      }
      {
        expand: true
        cwd: '<%= paths.img.backup_root.dest %>'
        src: '**/*.{png,jpg,gif,jpeg}'
        dest: '<%= paths.img.backup_root.dest %>'
      }
    ]
