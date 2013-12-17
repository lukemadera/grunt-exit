# grunt-exit

Super simple task to call node process.exit (i.e. for ensuring code-coverage is written properly, even on Windows)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-exit --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-exit');
```


## Exit task

### Usage Examples
Gruntfile.js
```js
	exit: {
		normal: {
		}
	}
```

## Development
See https://npmjs.org/doc/developers.html for notes on publishing npm modules in general.
- run `grunt` to ensure no issues
- bump version number in `package.json`
- update `CHANGELOG.md` (and potentially this `README.md`) file
- `git commit` changes
- `npm publish`
- push to github (to update there as well)

## TODO