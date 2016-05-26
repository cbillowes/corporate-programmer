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
      'shell:unfrontmatter'
      'release_jekyll'
      'sass:build'
      'copy:build'
    ]
