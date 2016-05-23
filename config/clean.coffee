module.exports =
  build: [
    '<%= paths.build.jekyll %>/*'
    '<%= paths.build.tmp %>/js/*'
    '<%= paths.build.tmp %>/css/*'
    '<%= paths.build.tmp %>/img/*'
    '<%= paths.build.tmp %>/*.{png,ico}'
  ]
  release: [
    '<%= paths.release %>/*'
    '!<%= paths.release %>/.git'
    '<%= paths.build.tmp %>/*'
  ]
