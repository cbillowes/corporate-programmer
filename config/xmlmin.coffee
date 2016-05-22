module.exports =
  release:
    files: [
      {
        expand: true
        cwd: '<%= paths.build.jekyll %>'
        src: '**/*.xml'
        dest: '<%= paths.release %>'
      }
    ]
