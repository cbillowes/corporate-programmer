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
    'process_images',
    'concurrent:build',
  ]);

  grunt.registerTask('optimize', [
    'autoprefixer',
    'concat',
    'uglify',
    'cssmin',
    'htmlmin',
    'xmlmin',
    'critical',
  ]);

  grunt.registerTask('release', [
    'clean:release',
    'concurrent:release',
    'process_images',
    'optimize',
    'copy:release',
    'connect:release',
    'watch:release',
  ]);

  grunt.registerTask('serve_release', [
    'connect:release',
    'watch:release',
  ]);

  grunt.registerTask('deploy', [
    'release',
    'buildcontrol',
  ]);

  // Helpers
  grunt.registerTask('build_jekyll', [
    'shell:posts',
    'copy:posts',
    'jekyll:build',
  ]);

  grunt.registerTask('release_jekyll', [
    'shell:posts',
    'copy:posts',
    'jekyll:release',
  ]);

  grunt.registerTask('init_images', [
    'copy:images_to_store',
    'responsive_images:init',
    'responsive_images:build',
    'imagemin:images_to_store',
    'imagemin:build',
    'clean:images_to_store',
  ]);

  grunt.registerTask('process_images', [
    'clean:optimized_images',
    'responsive_images:build',
    'copy:images_to_store',
    'clean:images_to_store',
    'imagemin:build',
  ]);

};
