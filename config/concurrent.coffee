module.exports =
  options:
    logConcurrentOutput: true
  build:
    tasks: [
      'shell:unfrontmatter'
      'build_jekyll'
      'sass:build'
      'copy:build'
    ]
  release:
    tasks: [
      'release_jekyll'
      'sass:build'
      'responsive_images:build'
      'copy:build'
      'shell:unfrontmatter'
    ]
