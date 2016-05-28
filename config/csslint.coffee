module.exports =

  options:
    quiet: true
    
  strict:
    src: [
      '<%= paths.optimize.src %>/css/*.css'
      '!<%= paths.optimize.src %>/css/*.map.css'
    ]
