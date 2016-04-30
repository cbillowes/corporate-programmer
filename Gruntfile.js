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

      clean: ['img/*', 'css/*.css'],

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
              { name: 'small', width: 320, quality: 80 },
              { name: 'medium', width: 640, quality: 80 },
              { name: 'large', width: 700, quality: 80 }
            ]
          },
          files: [
            {
              expand: true,
              src: [ '**/*.jpg' ],
              cwd: '_assets/posts/',
              custom_dest: '_build/img/{%= name %}/'
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
          files: ['_assets/**', '_includes/**', '_layouts/**', '_plugins/**', '_posts/**', '*.html', '!readme.md', '*.xml'],
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

};
