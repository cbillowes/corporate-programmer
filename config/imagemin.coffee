module.exports =
  build:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.build.assets %>/img'
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
