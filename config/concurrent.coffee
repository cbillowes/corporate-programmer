module.exports =
  options:
    logConcurrentOutput: true
  sass:
    tasks: [
      'sass:debug'
    ]
  debug:
    tasks: [
      'copy:post_images'
      'build_jekyll'
      'concurrent:sass'
      'responsive_images:debug'
      'copy:scripts'
    ]
  release:
    tasks: [
      'jekyll:release'
      'sass:release'
    ]
