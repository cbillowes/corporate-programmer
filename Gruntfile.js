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
      }
    });

    grunt.registerTask('build', ['shell:build']);

    grunt.registerTask('serve', ['shell:serve']);

    grunt.registerTask('default', ['build', 'serve']);

};
