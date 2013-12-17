/**
*/

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			options:{
				force: true
				//globalstrict: true
				//sub:true,
			},
			all: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js']
		},
		exit: {
			normal: {
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadTasks('tasks');		//load our exit plugin

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'exit']);
};