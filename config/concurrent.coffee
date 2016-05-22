module.exports =
  options:
    logConcurrentOutput: true
  build:
    tasks: [
      'copy:backup_images'
      'build_jekyll:build'
      'sass:build'
      'responsive_images:build'
      'copy:build'
      'shell:unfrontmatter'
    ]
  images:
    tasks: [
      'imagemin:build'
      'imagemin:posts'
    ]
  release:
    'build_jekyll:release'
