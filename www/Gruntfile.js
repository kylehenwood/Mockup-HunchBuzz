module.exports = function(grunt) {
	//require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'scss/public.css' : 'scss/public.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
    autoprefixer:{
      dist:{
        files:{
          'scss/public.css' : 'scss/public.css'
        }
      }
    }
	});

  grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
  grunt.registerTask('dev',['watch','sass','autoprefixer']);
}


/*
Packages:
npm install --save-dev load-grunt-tasks
npm install --save-dev grunt-contrib-jshint
npm install --save-dev grunt-contrib-watch
npm install --save-dev grunt-autoprefixer

*/
