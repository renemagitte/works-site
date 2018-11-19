module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
          dist: {
              files: {
                  'public/assets/stylesheets/style.css' : 'public/assets/stylesheets/style.sass'
              }
          }
      },
      watch: {
          css: {
              files: '**/*.sass',
              tasks: ['sass']
          }
      },
      processhtml: {
          build: {
              files: {
                  'public/index.html' : 'public/index_dev.html'
              }
          }
      },
      clean: ['public/assets/stylesheets/minified.css'],
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          compress: {
            drop_console: true
          }
        },
        build: {
          src: [
              'public/assets/js/works.js',
              'public/assets/js/setdesign.js',
              'public/assets/js/main.js'
          ],
          dest: 'public/assets/js/minified.js'
        }
      },

      cssmin: {
          options: {
              shorthandCompacting: false,
              roundingPrecision: -1
          },
          target: {
              files: {
              'public/assets/stylesheets/minified.css': 'public/assets/stylesheets/**/*.css'
              }
          }
      }             

  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('dev',['sass','watch']);
  grunt.registerTask('default', ['clean', 'processhtml', 'uglify', 'cssmin']);
}