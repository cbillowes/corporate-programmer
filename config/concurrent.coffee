module.exports =
  options:
    logConcurrentOutput: true
  build:
    tasks: [
      'copy:backup_images'
      'build_jekyll'
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
    tasks: [
      'copy:backup_images'
      'release_jekyll'
      'sass:build'
      'responsive_images:build'
      'copy:build'
      'shell:unfrontmatter'
    ]
