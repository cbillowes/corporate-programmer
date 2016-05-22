'use strict';

module.exports = function(grunt) {
  require('time-grunt')(grunt); // Show elapsed time after tasks run
  require('jit-grunt')(grunt); // Load all Grunt tasks
  grunt.loadNpmTasks('grunt-build-control'); // Version control built code and deploy it.

  var configs = require('load-grunt-configs')(grunt);
  grunt.initConfig(configs);

  grunt.registerTask('build_jekyll', [
    'shell:process_posts',
    'copy:build_jekyll',
    'jekyll:debug',
  ]);

  grunt.registerTask('build:debug', [
    'clean:debug',
    'copy:credits',
    'shell:credits',
    'build_jekyll',
    'concurrent:debug',
    'clean:post_images',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build:release', [
    'clean:release',
    'copy:credits',
    'shell:credits',
    // some cmd tasks need to run concurrently to prevent hanging
    'concurrent:release',
    // copies .tmp files only after Jekyll is complete
    'copy:release',
    'imagemin:release',
    'autoprefixer:release',
    'cssmin:release',
    'htmlmin:release',
    'xmlmin:release',
    'critical:release',
    'clean:release_cleanup',
  ]);

  grunt.registerTask('serve', function(target) {
    if (target === 'release') {
      return grunt.task.run(['build:release', 'connect:release:keepalive']);
    }

    grunt.task.run([
      'build:debug',
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
