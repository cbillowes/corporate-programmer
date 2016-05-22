module.exports =
  unfrontmatter:
    command: 'rake unfrontmatter'
    options:
      execOptions:
        cwd: 'rake'
  posts:
    command: 'rake process'
    options:
      execOptions:
        cwd: 'rake'
