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
  posts:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.build.jekyll %>/img'
        src: '**/*.{jpg,jpeg,png,gif}'
        dest: '<%= paths.optimize.img %>'
      }
    ]
