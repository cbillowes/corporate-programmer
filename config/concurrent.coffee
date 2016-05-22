module.exports =
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
      'imagemin:jekyll'
    ]
#   options:
#     logConcurrentOutput: true
#   sass:
#     tasks: [
#       'sass:debug'
#     ]
#   release:
#     tasks: [
#       'jekyll:release'
#       'sass:release'
#     ]
