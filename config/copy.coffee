module.exports =
  credits: files: 'credits.md': '<%= paths.src.app %>/credits.md'
  scripts: files: [
    {
      expand: true
      dot: true
      cwd: 'node_modules/bootstrap-sass/assets/javascripts'
      src: '**/*'
      dest: '<%= paths.build.tmp %>/js'
    }
    {
      expand: true
      cwd: '<%= paths.src.app %>/js'
      src: '**/*'
      dest: '<%= paths.build.tmp %>/js'
    }
  ]
  styles: files: [ {
    expand: true
    cwd: '<%= paths.src.app %>/css'
    src: '**/*'
    dest: '<%= paths.build.tmp %>/css'
  } ]
  post_images: files: [ {
    expand: true
    dot: true
    cwd: '<%= paths.src.app %>/_assets/post-images'
    src: '**/*'
    dest: '.backup/post-images'
  } ]
  build_jekyll: files: [
    {
      expand: true
      dot: true
      cwd: '<%= paths.src.posts %>'
      src: '**/*'
      dest: '<%= paths.src.app %>/_posts'
    }
    {
      expand: true
      dot: true
      cwd: '<%= paths.src.app %>/.img/'
      src: '**/*'
      dest: '<%= paths.build.tmp %>/img'
    }
  ]
  release: files: [
    {
      expand: true
      dot: true
      cwd: '<%= paths.build.tmp %>'
      src: '**/*'
      dest: '<%= paths.release %>'
    }
    {
      expand: true
      cwd: '<%= paths.src.app %>/_assets/favicons'
      src: [ '**/*.{ico,png}' ]
      dest: '<%= paths.release %>'
    }
    {
      '<%= paths.release %>/js/bootstrap.min.js': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'
      '<%= paths.release %>/js/jquery-1.12.3.min.js': '<%= paths.src.app %>/js/jquery-1.12.3.min.js'
      '<%= paths.release %>/js/script.min.js': '<%= paths.src.app %>/js/script.js'
    }
    {
      expand: true
      dot: true
      cwd: '<%= paths.src.app %>/.img/'
      src: '**/*'
      dest: '<%= paths.release %>/img'
    }
  ]
