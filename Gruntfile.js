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
      build: '.build',
      debug: {
        folder: '<%= app.build %>/debug',
        jekyll: '<%= app.debug.folder %>/jekyll/<%= app.baseurl %>',
        temp: '<%= app.debug.folder %>/tmp/<%= app.baseurl %>',
      },
      release: {
        folder: '<%= app.build %>/release/<%= app.baseurl %>',
        temp: '<%= app.build %>/.tmp/<%= app.baseurl %>',
      },
      baseurl: '',
    },

    clean: {
      debug: [
        '<%= app.debug.jekyll %>/*',
        '<%= app.debug.temp %>/*',
      ],
      release: [
        '<%= app.release.folder %>/*',
        '!<%= app.release.folder %>/.git',
        '<%= app.release.temp %>/*',
      ],
      release_cleanup: [
        '<%= app.release.temp %>',
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
        safe: true,
      },
      debug: {
        options: {
          config: '_config.yml',
          dest: '<%= app.debug.jekyll %>',
        },
      },
      release: {
        options: {
          config: '_config.yml,_config.build.yml',
          dest: '<%= app.release.folder %>',
        },
      },
    },

    concurrent: {
      debug: {
        tasks: ['jekyll:debug', 'sass:debug'],
      },
      release: {
        tasks: ['jekyll:release', 'sass:release'],
      },
    },

    copy: {
      release: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.release.temp %>',
          src: '**/*',
          dest: '<%= app.release.folder %>',
        }, {
          expand: true,
          cwd: '<%= app.app %>/_assets/favicons',
          src: ['**/*.{ico,png}'],
          dest: '<%= app.release.folder %>'
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
          custom_dest: '<%= app.debug.temp %>/img/{%= name %}',
        }],
      },
      release: {
        files: [{
          expand: true,
          src: ['**/*.jpg'],
          cwd: '<%= app.app %>/_assets/post-images',
          custom_dest: '<%= app.release.temp %>/img/{%= name %}'
        }],
      }
    },

    imagemin: {
      release: {
        options: {
          progressive: true,
        },
        files: [{
          expand: true,
          cwd: '<%= app.release.folder %>/img',
          src: '**/*.{jpg,jpeg,png,gif}',
          dest: '<%= app.release.folder %>/img',
        }],
      },
    },

    sass: {
      debug: {
        options: {
          loadPath: 'node_modules/bootstrap-sass/assets/stylesheets',
        },
        files: {
          '<%= app.debug.temp %>/css/blog.css' : '<%= app.app %>/_assets/scss/blog.scss',
          '<%= app.debug.temp %>/css/bootstrap.css' : '<%= app.app %>/_assets/bootstrap/imports.scss',
        },
      },
      release: {
        options: {
          loadPath: 'node_modules/bootstrap-sass/assets/stylesheets',
          style: 'compressed',
          noCache: true,
        },
        files: {
          '<%= app.release.temp %>/css/blog.css' : '<%= app.app %>/_assets/scss/blog.scss',
          '<%= app.release.temp %>/css/bootstrap.css' : '<%= app.app %>/_assets/bootstrap/imports.scss',
        },
      },
    },

    autoprefixer: {
      options: {
        browsers: ['last 3 versions'],
      },
      release: {
        files: [{
          expand: true,
          cwd: '<%= app.release.folder %>/css',
          src: '**/*.css',
          dest: '<%= app.release.folder %>/css',
        }],
      },
    },

    cssmin: {
      release: {
        options: {
          keepSpecialComments: 0,
          check: 'gzip',
        },
        files: [{
          expand: true,
          cwd: '<%= app.release.folder %>/css',
          src: ['*.css'],
          dest: '<%= app.release.folder %>/css',
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
          cwd: '<%= app.release.folder %>',
          src: '**/*.html',
          dest: '<%= app.release.folder %>',
        }],
      },
    },

    critical: {
      release: {
        options: {
          base: './',
          css: [
            '<%= app.release.folder %>/css/blog.css',
          ],
          minify: true,
          width: 320,
          height: 480,
        },
        files: [{
          expand: true,
          cwd: '<%= app.release.folder %>',
          src: ['**/*.html'],
          dest: '<%= app.release.folder %>',
        }],
      },
    },

    buildcontrol: {
      options: {
        dir: '<%= app.release.folder %>',
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
      app: {
        files: ['<%= app.app %>/**/*', 'Gruntfile.js'],
        tasks: ['build:debug'],
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>',
        },
        files: [
          '<%= app.debug.jekyll %>/**/*',
          '<%= app.debug.temp %>/**/*',
        ],
      },
    },

    connect: {
      options: {
        port: 4242,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        target: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>/<%= app.baseurl %>',
      },
      livereload: {
        options: {
          open: {
            target: '<%= connect.options.target %>',
          },
        },
        base: [
          '<%= app.debug.jekyll %>',
          '<%= app.debug.temp %>',
          '<%= app.app %>',
        ],
      },
      release: {
        options: {
          open: {
            target: '<%= connect.options.target %>',
          },
        },
        base: [
          '<%= app.release.folder %>',
        ],
      },
    },

  });

  grunt.registerTask('build:debug', [
    'clean:debug',
    'shell:fleschscore',
    'responsive_images:debug',
    'concurrent:debug',
    'connect:livereload',
    'watch',
  ]);

  grunt.registerTask('build:release', [
    'clean:release',
    'responsive_images:release',
    // some cmd tasks need to run concurrently to prevent hanging
    'concurrent:release',
    // copies .tmp files only after Jekyll is complete
    'copy:release',
    'imagemin:release',
    'autoprefixer:release',
    'cssmin:release',
    'htmlmin:release',
    'critical:release',
    'clean:release_cleanup',
  ]);

  grunt.registerTask('serve', function(target) {
    if (target === 'release') {
      return grunt.task.run(['build:release', 'connect:release:keepalive']);
    }

    grunt.task.run([
      'build:debug',
      'connect:livereload',
      'watch'
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
