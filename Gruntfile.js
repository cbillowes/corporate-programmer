'use strict';

module.exports = function(grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      shell: {
        build: {
          command: 'jekyll build'
        }
      },

      clean: ['css/*.css'],

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
          tasks: ['clean', 'shell:build', 'compile-sass'],
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
        }
      },

      watch: {
        config: {
          files: ['_config.yml'],
          tasks: ['build']
        },
        gruntfile: {
          files: ['Gruntfile.js'],
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

    grunt.registerTask('copy-files', ['copy:favicon', 'copy:css']);

    grunt.registerTask('build', ['concurrent:build', 'copy-files']);

    grunt.registerTask('default', ['watch']);

};
