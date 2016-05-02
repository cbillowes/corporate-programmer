'use strict';

module.exports = function(grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('jit-grunt')(grunt);
  // Version control built code and deploy it.
  grunt.loadNpmTasks('grunt-build-control');

  // Project configuration.
  var pkg = require('./package.json');

  grunt.initConfig({

    app: {
      app: 'app',
      jekyll: '.jekyll/<%= app.baseurl %>',
      temp: '.tmp/<%= app.baseurl %>',
      release: '_release/<%= app.baseurl %>',
      baseurl: '',
    },

    clean: {
      debug: [
        '<%= app.jekyll %>/*',
        '<%= app.temp %>/*',
      ],
      release: [
        '<%= app.release %>/*',
        '!<%= app.release %>/.git',
        '<%= app.temp %>/*',
      ],
      release_cleanup: [
        '<%= app.temp %>',
      ],
    },

    shell: {
      fleschscore: {
        command: 'rake readability',
        options: {
          execOptions: {
            cwd: 'rake',
          },
        },
      },
    },

    jekyll: {
      options: {
        src: '<%= app.app %>',
      },
      debug: {
        options: {
          config: '_config.yml',
          dest: '<%= app.jekyll %>',
          verbose: true,
        },
      },
      release: {
        options: {
          config: '_config.yml,_config.build.yml',
          dest: '<%= app.release %>',
        },
      },
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      sass: {
        tasks: [
          'sass:debug',
        ],
      },
      jekyll: {
        tasks: [
          'jekyll:debug',
        ],
      },
      debug: {
        tasks: [
          'concurrent:jekyll',
          'concurrent:sass',
          'responsive_images:debug',
        ],
      },
      release: {
        tasks: [
          'jekyll:release',
          'sass:release',
          'responsive_images:release',
        ],
      },
    },

    copy: {
      release: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.temp %>',
          src: '**/*',
          dest: '<%= app.release %>',
        }, {
          expand: true,
          cwd: '<%= app.app %>/_assets/favicons',
          src: ['**/*.{ico,png}'],
          dest: '<%= app.release %>'
        },
      ]},
    },

    responsive_images: {
      options: {
        engine: 'im', //ImageMagic - requires installation see readme.md
        sizes: [
          { name: 'thumb', width: 150, height: 150, quality: 50, aspectRatio: false },
          { name: '320', width: 320, height: getHeight(320), quality: 80, aspectRatio: false },
          { name: '480', width: 480, height: getHeight(480), quality: 80, aspectRatio: false },
          { name: '640', width: 640, height: getHeight(640), quality: 80, aspectRatio: false },
          { name: '960', width: 960, height: getHeight(960), quality: 60, aspectRatio: false },
          { name: '1024', width: 1024, height: getHeight(1024), quality: 60, aspectRatio: false },
          { name: '1280', width: 1280, height: getHeight(1280), quality: 50, aspectRatio: false },
          { name: '1440', width: 1440, height: getHeight(1440), quality: 50, aspectRatio: false },
          { name: '1600', width: 1600, height: getHeight(1600), quality: 50, aspectRatio: false },
          { name: '1920', width: 1920, height: getHeight(1920), quality: 50, aspectRatio: false },
        ],
      },
      debug: {
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: '<%= app.app %>/_assets/post-images',
          custom_dest: '<%= app.temp %>/img/{%= name %}',
        },
      ]},
      release: {
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: '<%= app.app %>/_assets/post-images',
          custom_dest: '<%= app.temp %>/img/{%= name %}'
        },
      ]},
    },

    imagemin: {
      release: {
        options: {
          progressive: true,
        },
        files: [{
          expand: true,
          cwd: '<%= app.release %>/img',
          src: '**/*.{jpg,jpeg,png,gif}',
          dest: '<%= app.release %>/img',
        }],
      },
    },

    sass: {
      debug: {
        options: {
          loadPath: 'node_modules/bootstrap-sass/assets/stylesheets',
          noCache: true,
        },
        files: {
          '<%= app.temp %>/css/blog.css' : '<%= app.app %>/_assets/scss/blog.scss',
          '<%= app.temp %>/css/bootstrap.css' : '<%= app.app %>/_assets/bootstrap/imports.scss',
        },
      },
      release: {
        options: {
          loadPath: 'node_modules/bootstrap-sass/assets/stylesheets',
          style: 'compressed',
          noCache: true,
        },
        files: {
          '<%= app.temp %>/css/blog.css' : '<%= app.app %>/_assets/scss/blog.scss',
          '<%= app.temp %>/css/bootstrap.css' : '<%= app.app %>/_assets/bootstrap/imports.scss',
        },
      },
    },

    autoprefixer: {
      options: {
        browsers: [
          'last 3 versions',
        ],
      },
      release: {
        files: [{
          expand: true,
          cwd: '<%= app.release %>/css',
          src: '**/*.css',
          dest: '<%= app.release %>/css',
        },
      ]},
    },

    cssmin: {
      release: {
        options: {
          keepSpecialComments: 0,
          check: 'gzip',
        },
        files: [{
          expand: true,
          cwd: '<%= app.release %>/css',
          src: [
            '*.css',
          ],
          dest: '<%= app.release %>/css',
        }],
      },
    },

    htmlmin: {
      release: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          minifyJS: true,
          minifyCSS: true,
        },
        files: [{
          expand: true,
          cwd: '<%= app.release %>',
          src: '**/*.html',
          dest: '<%= app.release %>',
        },
      ]},
    },

    xmlmin: {
      release: {
        files: [{
          expand: true,
          cwd: '<%= app.release %>',
          src: '**/*.xml',
          dest: '<%= app.release %>',
        },
      ]},
    },

    critical: {
      release: {
        options: {
          base: './',
          css: [
            '<%= app.release %>/css/blog.css',
            '<%= app.release %>/css/bootstrap.css',
          ],
          minify: true,
          width: 320,
          height: 480,
        },
        files: [{
          expand: true,
          cwd: '<%= app.release %>',
          src: [
            '**/*.html',
          ],
          dest: '<%= app.release %>',
        }],
      },
    },

    buildcontrol: {
      options: {
        dir: '<%= app.release %>',
        commit: true,
        connectCommits: false,
        //push: true,
        //TODO: Warning: fatal: '../' does not appear to be a git repository
        //fatal: Could not read from remote repository.
        // Please make sure you have the correct access rights
        // and the repository exists.
        //  Use --force to continue.
      },
      release: {
        remote: 'git@bitbucket.org:digital-dreamers/corporate-programmer-static.git',
      }
    },

    watch: {
      sass: {
        files: [
          '<%= app.app %>/_assets/scss/**/*.{scss,sass}',
          '<%= app.app %>/_assets/bootstrap/**/*.{scss,sass}',
        ],
        tasks: [
          'concurrent:sass',
        ],
      },
      jekyll: {
        files: [
          '<%= app.app %>/**/*.{html,yml,md,mkd,markdown,xml,rb}',
          '!<%= app.app %>/_posts/*.{md,markdown}',
        ],
        tasks: [
          'concurrent:jekyll'
        ],
      },
      img: {
        files: [
          '<%= app.app %>/**/*.{jpg}',
        ],
        tasks: [
          'concurrent:responsive_images'
        ],
      },
      gruntfile: {
        files: [
          'Gruntfile.js',
        ],
        tasks: [
          'concurrent:debug',
        ],
        options: {
          reload: true
        },
      },
      posts: {
        files: [
          '<%= app.app %>/_posts/*.{md,markdown}',
        ],
        tasks: [
          'shell:fleschscore',
          'concurrent:jekyll',
        ],
        options: {
          debounceDelay: 3000,
        },
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>',
        },
        files: [
          '<%= app.jekyll %>/**/*.{html,yml,md,mkd,markdown}',
          '<%= app.temp %>/css/*.css',
          '<%= app.temp %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
          '<%= app.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
        ],
      },
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
      },
      livereload: {
        options: {
          open: {
            target: 'http://localhost:9000/<%= app.baseurl %>',
          },
          base: [
            '<%= app.jekyll %>',
            '<%= app.temp %>',
            '<%= app.app %>',
          ],
        },
      },
      release: {
        options: {
          open: {
            target: 'http://localhost:9000/<%= app.baseurl %>',
          },
          base: [
            '<%= app.release %>',
          ],
        }
      },
    },

  });

  grunt.registerTask('build:debug', [
    'clean:debug',
    'shell:fleschscore',
    'concurrent:debug',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build:release', [
    'clean:release',
    // some cmd tasks need to run concurrently to prevent hanging
    'concurrent:release',
    // copies .tmp files only after Jekyll is complete
    'copy:release',
    'imagemin:release',
    'autoprefixer:release',
    'cssmin:release',
    'htmlmin:release',
    'xmlmin:release',
    'critical:release',
    'clean:release_cleanup',
  ]);

  grunt.registerTask('serve', function(target) {
    if (target === 'release') {
      return grunt.task.run(['build:release', 'connect:release:keepalive']);
    }

    grunt.task.run([
      'build:debug',
    ]);
  });

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve:debug` or `grunt serve:release` to start a server. Starting debug server now.');
    grunt.task.run(['serve:debug']);
  });

  grunt.registerTask('deploy', [
    'build:release',
    'buildcontrol'
  ]);

  grunt.registerTask('default', [
    'serve:debug'
  ]);

};

function getHeight(width) {
  // Online aspect ratio calculator http://andrew.hedges.name/experiments/aspect_ratio
  // _data/images.yml needs to contain the aspect ratio if it changes
  var aspectRatio = 0.3125;
  return width * aspectRatio;
}
