module.exports =
  debug: [
    '<%= paths.build.jekyll %>/*'
    '<%= paths.build.tmp %>/*'
  ]
  release: [
    '<%= paths.release %>/*'
    '!<%= paths.release %>/.git'
    '<%= paths.build.tmp %>/*'
  ]
  release_cleanup: [ '<%= paths.build.tmp %>' ]
  post_images: [ '<%= paths.src.app %>/_assets/post-images/*.jpg' ]
