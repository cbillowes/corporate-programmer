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

  grunt.registerTask('build', '', function(target) {
    grunt.task.run('clean:build');
    grunt.task.run('process_images');
    grunt.task.run('process_wip_posts');
    grunt.task.run('concurrent:build');

    if (target === 'release') {
      grunt.task.run('concurrent:jekyll_release');
    } else {
      grunt.task.run('concurrent:jekyll_build');
    }
  });

  grunt.registerTask('release', [
    'clean:release',
    'build:release',
    'copy:release',
    'autoprefixer',
    'concurrent:release',
  ]);

  grunt.registerTask('deploy', [
    'release',
    'buildcontrol',
  ]);

  //Helpers
  grunt.registerTask('process_jekyll', '', function(target) {
    if (target === 'release') {
      grunt.task.run('jekyll:release');
    } else {
      grunt.task.run('jekyll:build');
    }
    grunt.task.run('copy:jekyll');
  });

  grunt.registerTask('process_wip_posts', [
    'shell:wip_posts',
    'copy:wip_posts',
  ]);

  grunt.registerTask('process_favicons', [
    'copy:favicons',
    'imagemin:favicons',
  ]);

  grunt.registerTask('process_js', [
    'copy:js',
    'uglify:js',
    'copy:serve_assets',
  ]);

  grunt.registerTask('process_sass', [
    'concurrent:sass',
    'concat:css',
    'copy:serve_assets',
  ]);

  grunt.registerTask('process_images', [
    'images_root',
    'images_heroes',
  ]);

  grunt.registerTask('images_root', [
    'imagemin:root',
    'copy:images_to_store',
    'clean:root_images',
  ]);

  grunt.registerTask('images_heroes', [
    'imagemin:heroes',
    'copy:images_to_store',
    'responsive_images:build',
    'imagemin:build',
    'clean:hero_images',
  ]);

  grunt.registerTask('init_images', [
    'copy:images_to_store',
    'responsive_images:init',
    'responsive_images:build',
    'imagemin:images_to_store',
    'imagemin:build',
    'clean:root_images',
    'clean:hero_images',
  ]);

};
