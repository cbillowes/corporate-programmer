module.exports =
  build:
    files: [
      'credits.md': '<%= paths.src.app %>/credits.md'
      '<%= paths.build.tmp %>/js/bootstrap.js': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
      '<%= paths.build.tmp %>/js/jquery-1.12.3.js': '<%= paths.src.app %>/js/jquery-1.12.3.js'
      {
        expand: true
        cwd: '<%= paths.src.app %>/_assets/favicons'
        src: [
          '**/*.{ico,png}'
        ]
        dest: '<%= paths.build.tmp %>'
      }
    ]
  posts:
    files: [
      {
        expand: true
        cwd: '<%= paths.src.posts %>'
        src: '**/*'
        dest: '<%= paths.src.app %>/_posts'
      }
    ]
  backup_images:
    files: [
      {
        expand: true
        cwd: '<%= paths.img.backup_heroes.src %>'
        src: '**/*.{jpg}'
        dest: '<%= paths.img.backup_heroes.dest %>'
      }
      {
        expand: true
        cwd: '<%= paths.img.backup_root.src %>'
        src: '**/*'
        dest: '<%= paths.img.backup_root.dest %>'
      }
      {
        expand: true
        cwd: '<%= paths.img.backup_root.dest %>'
        src: '**/*'
        dest: '<%= paths.img.store %>/img'
      }
    ]
#   release:
#     files: [
#       {
#         expand: true
#         dot: true
#         cwd: '<%= paths.build.tmp %>'
#         src: '**/*'
#         dest: '<%= paths.release %>'
#       }
#       {
#         expand: true
#         cwd: '<%= paths.src.app %>/_assets/favicons'
#         src: [
#           '**/*.{ico,png}'
#         ]
#         dest: '<%= paths.release %>'
#       }
#       {
#         '<%= paths.release %>/js/bootstrap.min.js': 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'
#         '<%= paths.release %>/js/jquery-1.12.3.min.js': '<%= paths.src.app %>/js/jquery-1.12.3.min.js'
#         '<%= paths.release %>/js/script.min.js': '<%= paths.src.app %>/js/script.js'
#       }
#       {
#         expand: true
#         dot: true
#         cwd: '<%= paths.src.app %>/.img/'
#         src: '**/*'
#         dest: '<%= paths.release %>/img'
#       }
#     ]
