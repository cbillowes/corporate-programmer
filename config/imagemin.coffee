module.exports =
  release:
    options:
      progressive: true
    files: [
      {
        expand: true
        cwd: '<%= paths.release %>/img'
        src: '**/*.{jpg,jpeg,png,gif}'
        dest: '<%= paths.release %>/img'
      }
    ]
