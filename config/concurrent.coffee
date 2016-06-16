module.exports =

  options:
    logConcurrentOutput: true

  build:
    tasks: [
      'process_sass'
      'process_js'
      'concurrent:credits'
      'process_favicons'
      'copy:fonts'
      'copy:css'      
    ]

  jekyll_build:
    tasks: [
      'process_jekyll:build'
    ]

  jekyll_release:
    tasks: [
      'process_jekyll:release'
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

  release: [
    'cssmin'
    'htmlmin'
    'xmlmin'
    'critical'
  ]
