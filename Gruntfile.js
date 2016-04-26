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
      }
    });

    grunt.registerTask('build', ['shell:build']);
    grunt.registerTask('compile-sass', ['sass:bootstrap']);

    grunt.registerTask('serve', ['shell:serve']);

    grunt.registerTask('default', ['build', 'serve']);

    //execute `grunt %_TASK_% -v` for verbose messaging
};
