'use strict';

module.exports = function(grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      shell: {
        build: {
          command: 'jekyll build'
        },
        readability: {
          command: 'rake readability',
          options: {
            execOptions: {
              cwd: '_lib'
            }
          }
        }
      },

      clean: ['_build/img/*', 'img/*', 'css/*.css'],

      sass: {
        bootstrap: {
          options: {
            style: 'compressed',
            sourcemap: 'none',
            noCache: true,
            loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
          },
          files: {
              // Source file fails to generate output when starting with _.
              // destination : source
              'css/bootstrap.min.css': '_sass/bootstrap/imports.scss'
          }
        },
        site: {
          options: {
            style: 'compressed',
            sourcemap: 'none'
          },
          files: {
            'css/essentials.min.css' : '_sass/essentials/imports.scss'
          }
        }
      },

      concurrent: {
        build: {
          tasks: ['clean', 'shell:readability', 'shell:build', 'compile-sass'],
          options: {
            logConcurrentOutput: true
          }
        }
      },

      copy: {
        favicon: {
          files: [
            // expand: true to fix abortion: Warning: Unable to read "favicon.ico" file (Error code: ENOENT). Use --force to continue.
            // https://github.com/gruntjs/grunt-contrib-copy/issues/64
            { expand : true, cwd: '_assets/favicons/', src: ['*.ico', '*.png'], dest: '_site/' }
          ]
        },
        css: {
          files: [
            { expand : true, cwd: 'css/', src: ['**'], dest: '_site/css/' }
          ]
        },
        img: {
          files: [
            { expand : true, cwd: 'img/', src: ['**'], dest: '_site/img/' }
          ]
        }
      },

      responsive_images: {
        posts: {
          options: {
            engine: 'im', // uses ImageMagick
            sizes: [
              { name: '320', width: 320, height: getResponsiveHeight(320), quality: 80, aspectRatio: false },
              { name: '480', width: 480, height: getResponsiveHeight(480), quality: 80, aspectRatio: false },
              { name: '640', width: 640, height: getResponsiveHeight(640), quality: 80, aspectRatio: false },
              { name: '960', width: 960, height: getResponsiveHeight(960), quality: 60, aspectRatio: false },
              { name: '1024', width: 1024, height: getResponsiveHeight(1024), quality: 60, aspectRatio: false },
              { name: '1280', width: 1280, height: getResponsiveHeight(1280), quality: 50, aspectRatio: false },
              { name: '1440', width: 1600, height: getResponsiveHeight(1600), quality: 50, aspectRatio: false },
              { name: '1600', width: 1600, height: getResponsiveHeight(1600), quality: 50, aspectRatio: false },
              { name: '1920', width: 1920, height: getResponsiveHeight(1920), quality: 50, aspectRatio: false }
            ]
          },
          files: [
            {
              expand: true,
              src: [ '**/*.jpg' ],
              cwd: '_assets/posts/',
              dest: '_build/img/'
            }
          ]
        }
      },

      imagemin: {
        posts: {
          options: {
            optimizationLevel: 4,
            progressive: true
          },
          files: [{
            expand: true,
            cwd: '_build/img/',
            src: '**/*.jpg',
            dest: 'img/'
          }]
        }
      },

      watch: {
        config: {
          files: ['_config.yml'],
          tasks: ['build']
        },
        gruntfile: {
          files: ['Gruntfile.js'],
          tasks: ['build'],
          options: {
            reload: true
          }
        },
        site: {
          files: ['_assets/**', '_data/**', '_includes/**', '_layouts/**', '_plugins/**', '_posts/**', '*.html', '!readme.md', '*.xml'],
          tasks: ['build']
        },
        sass: {
          files: ['_sass/**'],
          tasks: ['compile-sass', 'copy:css']
        }
      }

    });

    grunt.registerTask('compile-sass', ['sass:bootstrap', 'sass:site']);

    grunt.registerTask('copy-files', ['copy:favicon', 'copy:css', 'copy:img']);

    grunt.registerTask('process-images', ['responsive_images:posts', 'imagemin:posts']);

    grunt.registerTask('build', ['concurrent:build', 'process-images', 'copy-files']);

    grunt.registerTask('default', ['watch']);

    function getResponsiveHeight(width) {
      // Online aspect ratio calculator (http://andrew.hedges.name/experiments/aspect_ratio/)
      // height / width
      // Post stylesheet needs to be updated to include new aspect ratio
      var aspectRatio = 600 / 1920;
      return width * aspectRatio;
    }
};
