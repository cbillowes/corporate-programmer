'use strict';

module.exports = function(grunt) {
  require('time-grunt')(grunt); // Show elapsed time after tasks run
  require('jit-grunt')(grunt); // Load all Grunt tasks
  grunt.loadNpmTasks('grunt-build-control'); // Version control built code and deploy it.

  var configs = require('load-grunt-configs')(grunt);
  grunt.initConfig(configs);

  grunt.registerTask('default', [
    'build',
    'connect:livereload',
    'watch',
  ]);

  grunt.registerTask('build', [
    'clean:build',
    'concurrent:build',
  ]);

  grunt.registerTask('optimize', [
    'concurrent:images',
    'autoprefixer',
    'concat',
    'cssmin',
    'csslint',
    'htmlmin',
    'xmlmin',
    'critical',
  ]);

  grunt.registerTask('release', [
    'clean:release',
    'concurrent:release',
    'copy:release',
    'optimize',
    'connect:release',
  ]);

  grunt.registerTask('deploy', [
    'release',
    'buildcontrol',
  ]);

  // Helpers
  grunt.registerTask('build_jekyll', [
    'shell:posts',
    'copy:posts',
    'clean:images',
    'jekyll:build',
  ]);

  grunt.registerTask('release_jekyll', [
    'shell:posts',
    'copy:posts',
    'clean:images',
    'jekyll:release',
  ]);

  grunt.registerTask('init_images', [
    'responsive_images:init',
    'imagemin:init',
  ]);

};
