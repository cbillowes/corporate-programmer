module.exports = release: files: [ {
  expand: true
  cwd: '<%= paths.release %>'
  src: '**/*.xml'
  dest: '<%= paths.release %>'
} ]
