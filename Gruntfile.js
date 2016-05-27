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
    'process_wip_posts',
    'concurrent:build',
  ]);

  //Helpers
  grunt.registerTask('process_jekyll', [
    'jekyll:build',
    'copy:jekyll',
  ]);

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

  // grunt.registerTask('optimize', [
  //   'autoprefixer',
  //   'concat',
  //   'uglify',
  //   'cssmin',
  //   'htmlmin',
  //   'xmlmin',
  //   'critical',
  // ]);
  //
  // grunt.registerTask('release', [
  //   'clean:release',
  //   'concurrent:release',
  //   'images_root',
  //   'optimize',
  //   'copy:release',
  //   'connect:release',
  //   'watch:release',
  // ]);
  //
  // grunt.registerTask('serve_release', [
  //   'connect:release',
  //   'watch:release',
  // ]);
  //
  // grunt.registerTask('deploy', [
  //   'release',
  //   'buildcontrol',
  // ]);
  //
  // // Helpers
  // grunt.registerTask('build_jekyll', [
  //   'jekyll:build',
  // ]);
  //
  // grunt.registerTask('release_jekyll', [
  //   'shell:posts',
  //   'copy:posts',
  //   'jekyll:release',
  // ]);

};
