'use strict';

module.exports = function(grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('jit-grunt')(grunt);

  grunt.initConfig({

    app: {
      app: 'app',
      dist: 'dist',
      baseurl: ''
    },

    shell: {
      fleschscore: {
        command: 'rake readability',
        options: {
          execOptions: {
            cwd: 'rake'
          }
        }
      }
    },

    watch: {
      favicon: {
        files: [ '<%= app.app %>/_assets/favicons/**/*.{png,ico}'],
        tasks: ['copy:favicon']
      },
      bootstrap: {
        files: ['<%= app.app %>/_assets/bootstrap/**/*.{scss,sass}'],
        tasks: ['sass:bootstrap', 'autoprefixer']
      },
      sass: {
        files: ['<%= app.app %>/_assets/scss/**/*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer']
      },
      scripts: {
        files: ['<%= app.app %>/_assets/js/**/*.{js}'],
        tasks: ['uglify']
      },
      jekyll: {
        files: [
          '<%= app.app %>/**/*.{html,yml,md,mkd,markdown}', 'Gruntfile.js'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.{html,yml,md,mkd,markdown}',
          '.tmp/<%= app.baseurl %>/css/*.css',
          '.tmp/<%= app.baseurl %>/js/*.js',
          '<%= app.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      app: {
        tasks: [
          'watch:favicon',
          'watch:bootstrap',
          'watch:sass',
          'watch:scripts',
          'watch:jekyll'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: {
            target: 'http://localhost:9000/<%= app.baseurl %>'
          },
          base: [
            '.jekyll',
            '.tmp',
            '<%= app.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: {
            target: 'http://localhost:9000/<%= app.baseurl %>'
          },
          base: [
            '<%= app.dist %>',
            '.tmp'
          ]
        }
      }
    },

    clean: {
      server: [
        '.jekyll',
        '.tmp'
      ],
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= app.dist %>/*',
            '!<%= app.dist %>/.git*'
          ]
        }]
      }
    },

    jekyll: {
      options: {
        config: '_config.yml,_config.build.yml',
        src: '<%= app.app %>'
      },
      dist: {
        options: {
          dest: '<%= app.dist %>/<%= app.baseurl %>',
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll/<%= app.baseurl %>'
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/<%= app.baseurl %>',
          src: '**/*.html',
          dest: '<%= app.dist %>/<%= app.baseurl %>'
        }]
      }
    },

    uglify: {
      options: {
        preserveComments: false
      },
      dist: {
        files: {
          '.tmp/<%= app.baseurl %>/js/scripts.js': ['<%= app.app %>/_assets/js/**/*.js']
        }
      }
    },

    sass: {
      bootstrap: {
        options: {
          sourcemap: 'none',
          loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
        },
        files: {
          '.tmp/<%= app.baseurl %>/css/bootstrap.css' : '<%= app.app %>/_assets/bootstrap/imports.scss'
        }
      },
      server: {
        options: {
          sourcemap: 'file'
        },
        files: [{
          expand: true,
          cwd: '<%= app.app %>/_assets/scss',
          src: '**/*.{scss,sass}',
          dest: '.tmp/<%= app.baseurl %>/css',
          ext: '.css'
        }]
      },
      dist: {
        options: {
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: '<%= app.app %>/_assets/scss',
          src: '**/*.{scss,sass}',
          dest: '<%= app.dist %>/<%= app.baseurl %>/css',
          ext: '.css'
        }]
      }
    },

    uncss: {
      options: {
        htmlroot: '<%= app.dist %>/<%= app.baseurl %>',
        report: 'gzip'
      },
      dist: {
        src: '<%= app.dist %>/<%= app.baseurl %>/**/*.html',
        dest: '.tmp/<%= app.baseurl %>/css/blog.css'
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/<%= app.baseurl %>/css',
          src: '**/*.css',
          dest: '.tmp/<%= app.baseurl %>/css'
        }]
      }
    },

    critical: {
      dist: {
        options: {
          base: './',
          css: [
            '.tmp/<%= app.baseurl %>/css/blog.css'
          ],
          minify: true,
          width: 320,
          height: 480
        },
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/<%= app.baseurl %>',
          src: ['**/*.html'],
          dest: '<%= app.dist %>/<%= app.baseurl %>'
        }]
      }
    },

    cssmin: {
      dist: {
        options: {
          keepSpecialComments: 0,
          check: 'gzip'
        },
        files: [{
          expand: true,
          cwd: '.tmp/<%= app.baseurl %>/css',
          src: ['*.css'],
          dest: '.tmp/<%= app.baseurl %>/css'
        }]
      }
    },

    responsive_images: {
      posts: {
        options: {
          engine: 'im', //ImageMagic - requires installation see readme.md
          sizes: [
            { name: 'thumb', width: 150, height: getHeight(150), quality: 50, aspectRatio: false },
            { name: '320', width: 320, height: getHeight(320), quality: 80, aspectRatio: false },
            { name: '480', width: 480, height: getHeight(480), quality: 80, aspectRatio: false },
            { name: '640', width: 640, height: getHeight(640), quality: 80, aspectRatio: false },
            { name: '960', width: 960, height: getHeight(960), quality: 60, aspectRatio: false },
            { name: '1024', width: 1024, height: getHeight(1024), quality: 60, aspectRatio: false },
            { name: '1280', width: 1280, height: getHeight(1280), quality: 50, aspectRatio: false },
            { name: '1440', width: 1440, height: getHeight(1440), quality: 50, aspectRatio: false },
            { name: '1600', width: 1600, height: getHeight(1600), quality: 50, aspectRatio: false },
            { name: '1920', width: 1920, height: getHeight(1920), quality: 50, aspectRatio: false }
          ]
        },
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: '<%= app.app %>/_assets/post-images',
          custom_dest: '.tmp/<%= app.baseurl %>/img/{%= width %}'
        }]
      }
    },

    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/<%= app.baseurl %>/img',
          src: '**/*.{jpg,jpeg,png,gif}',
          dest: '<%= app.dist %>/<%= app.baseurl %>/img'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dist %>/<%= app.baseurl %>/img',
          src: '**/*.svg',
          dest: '<%= app.dist %>/<%= app.baseurl %>/img'
        }]
      }
    },

    copy: {
      favicon: {
        files: [{
          expand: true,
          cwd: '<%= app.app %>/_assets/favicons',
          src: ['**/*.{ico,png}'],
          dest: '.tmp/<%= app.baseurl %>'
        }]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '.tmp/<%= app.baseurl %>',
          src: [
            'css/**/*',
            'js/**/*'
          ],
          dest: '<%= app.dist %>/<%= app.baseurl %>'
        }]
      }
    },

    buildcontrol: {
      dist: {
        options: {
          dir: '<%= app.dist %>/<%= app.baseurl %>',
          remote: 'git@github.com:user/repo.git',
          branch: 'gh-pages',
          commit: true,
          push: true,
          connectCommits: false
        }
      }
    }

  });

  // Define Tasks
  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'copy:favicon',
      'responsive_images:posts',
      'sass:bootstrap',
      'sass:server',
      'shell:fleschscore',
      'jekyll:server',
      'autoprefixer',
      'uglify',
      'connect:livereload',
      'watch:livereload'
    ]);
  });

  grunt.registerTask('watch-app', ['concurrent:app']);

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'jekyll:dist',
    'imagemin',
    'svgmin',
    'sass:dist',
    'uncss',
    'autoprefixer',
    'cssmin',
    'uglify',
    'critical',
    'htmlmin'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'copy',
    'buildcontrol'
  ]);

  grunt.registerTask('default', [
    'serve'
  ]);
};

function getHeight(width) {
  // Online aspect ratio calculator http://andrew.hedges.name/experiments/aspect_ratio
  // _data/images.yml needs to contain the aspect ratio if it changes
  var aspectRatio = 0.3125;
  return width * aspectRatio;
}
