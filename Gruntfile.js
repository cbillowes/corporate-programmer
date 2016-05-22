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
    'concurrent:images'
  ]);

  grunt.registerTask('release', []);
  grunt.registerTask('deploy', []);

  // Helpers
  grunt.registerTask('build_jekyll', [
    'shell:posts',
    'copy:posts',
    'clean:images',
    'jekyll:build',
  ]);

  grunt.registerTask('init_images', [
    'responsive_images:init',
    'imagemin:init',
  ]);

  //
  // grunt.registerTask('build:release', [
  //   'clean:release',
  //   'copy:credits',
  //   'shell:credits',
  //   // some cmd tasks need to run concurrently to prevent hanging
  //   'concurrent:release',
  //   // copies .tmp files only after Jekyll is complete
  //   'copy:release',
  //   'imagemin:release',
  //   'autoprefixer:release',
  //   'cssmin:release',
  //   'htmlmin:release',
  //   'xmlmin:release',
  //   'critical:release',
  //   'clean:release_cleanup',
  // ]);
  //
  // grunt.registerTask('serve', function(target) {
  //   if (target === 'release') {
  //     return grunt.task.run(['build:release', 'connect:release:keepalive']);
  //   }
  //
  //   grunt.task.run([
  //     'build:debug',
  //   ]);
  // });
  //
  // grunt.registerTask('server', function() {
  //   grunt.log.warn('The `server` task has been deprecated. Use `grunt serve:debug` or `grunt serve:release` to start a server. Starting debug server now.');
  //   grunt.task.run(['serve:debug']);
  // });
  //
  // grunt.registerTask('deploy', [
  //   'build:release',
  //   'buildcontrol'
  // ]);
  //
  // grunt.registerTask('default', [
  //   'serve:debug'
  // ]);

};
