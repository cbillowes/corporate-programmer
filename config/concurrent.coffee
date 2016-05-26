module.exports =
  options:
    logConcurrentOutput: true
  build:
    tasks: [
      'build_jekyll'
      'sass:build'
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
      'release_jekyll'
      'sass:build'
      'responsive_images:build'
      'copy:build'
      'shell:unfrontmatter'
    ]
