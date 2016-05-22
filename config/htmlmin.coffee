module.exports = release:
  options:
    removeComments: true
    collapseWhitespace: true
    collapseBooleanAttributes: true
    removeAttributeQuotes: true
    removeRedundantAttributes: true
    removeEmptyAttributes: true
    minifyJS: true
    minifyCSS: true
  files: [ {
    expand: true
    cwd: '<%= paths.release %>'
    src: '**/*.{html,shtml}'
    dest: '<%= paths.release %>'
  } ]
