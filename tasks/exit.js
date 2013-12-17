/**
@fileDescription
Just calls node process.exit

@usage
`grunt exit`

@toc
*/

module.exports = function(grunt) {
	grunt.registerMultiTask("exit", "Call process.exit", function() {
		/**
		Setup - Pull in grunt config for this task/target and extend from defaults.
		@toc 0.
		*/
		
		/**
		@toc 1.
		@method init
		@param {Object} conf
		*/
		function init(conf, params) {
			console.log('process.exit being called');
			process.exit(0);
		}

		init(this.data, {});		//start everything
	});
};