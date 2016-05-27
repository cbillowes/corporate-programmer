module.exports =
  options:
    logConcurrentOutput: true

  build:
    tasks: [
      'process_sass'
      'process_js'
      'concurrent:credits'
      'process_favicons'
      'process_jekyll'
    ]

  credits:
    tasks: [
      'shell:unfrontmatter'
      'copy:credits'
    ]

  sass:
    tasks: [
      'sass:build'
    ]
  # release:
  #   tasks: [
  #     'shell:unfrontmatter'
  #     'release_jekyll'
  #     'sass:build'
  #     'copy:build'
  #   ]
