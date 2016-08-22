module.exports = function(grunt) {

  // Configure tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dist: {
        files: {
          'dist/js/perfmatters.min.js': 'js/perfmatters.js',
          'views/dist/js/main.js': 'views/js/main.js'
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'dist/css/print.css': 'css/print.css',
          'dist/css/style.css': 'css/style.css',
          'views/dist/css/bootstrap-grid.css': 'views/css/bootstrap-grid.css',
          'views/dist/css/style.css': 'views/css/style.css'
        }
      }
    },
    watch: {
      js: {
        files: ['js/*.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['css/*.css'],
        tasks: ['cssmin']
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch'); // You don't need to register the watch task - just run grunt watch in terminal

  // Register tasks
  grunt.registerTask('default', ['uglify', 'cssmin']);
};
