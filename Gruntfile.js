'use strict';

module.exports = function(grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
      shell: {
        build: {
          command: 'jekyll build'
        },
        serve: {
          command: 'jekyll serve --skip-initial-build'
        }
      },

      sass: {
        bootstrap: {
          options: {
            style: 'compressed',
            noCache: true,
            loadPath: 'node_modules/bootstrap-sass/assets/stylesheets'
          },
          files: {
              // Source file fails to generate output when starting with _.
              // destination : source
              '_build/css/bootstrap.min.css': '_sass/bootstrap-override.scss'
          }
        }
      },

      concurrent: {
        build: {
          tasks: ['shell:build', 'compile-sass'],
          options: {
            logConcurrentOutput: true
          }
        }
      },

      copy: {
        css: {
          files: [
            { expand: true, cwd: '_build/css/', src: ['*.css', '*.map'], dest: '_site/css/' }
          ]
        },
        favicon: {
          files: [
            // expand: true to fix abortion: Warning: Unable to read "favicon.ico" file (Error code: ENOENT). Use --force to continue.
            // https://github.com/gruntjs/grunt-contrib-copy/issues/64
            { expand : true, cwd: '_assets/favicons/', src: ['*.ico', '*.png'], dest: '_site/' }
          ]
        }
      },

      watch: {
        site: {
          files: ['_site/*'],
          tasks: ['copy-files']
        }
      }

    });

    grunt.registerTask('compile-sass', ['sass:bootstrap']);

    grunt.registerTask('copy-files', ['copy:css', 'copy:favicon']);

    grunt.registerTask('build', ['concurrent:build', 'copy-files', 'watch:site']);

    grunt.registerTask('serve', ['shell:serve']);

    grunt.registerTask('default', ['build', 'serve']);

    //execute `grunt %_TASK_% -v` for verbose messaging
};
