var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var path = require('path');

module.exports = generators.Base.extend({
	promptUser: function() {
		var done = this.async();

		var prompts = [{
				name: 'includeRun',
				type: 'confirm',
				message: "Should your feature have a run function?",
				default: true
			},
			{
				name: 'includeConfig',
				type: 'confirm',
				message: "Should your feature have a config function?",
				default: true
			}
		];

		this.prompt(prompts, function(props) {
			this.includeRun = props.includeRun
			this.includeConfig = props.includeConfig

			done();
		}.bind(this))
	},
	copyMainFiles: function(__dirname) {
		this.destinationRoot(path.join('src/app/modules', this.args[0]));
		var context = {
			featureName: this.args[0],
			includeRun: this.includeRun,
			includeConfig: this.includeConfig
		}

		if (this.includeConfig) {
			this.template("_config.js", this.args[0] + ".config.js", context);
		}

		if (this.includeRun) {
			this.template("_run.js", this.args[0] + ".run.js", context);
		}

		this.template("_.html", this.args[0] + ".html", context);
		this.template("_route.js", this.args[0] + ".route.js", context);
		this.template("_controller.js", this.args[0] + ".controller.js", context);
		this.template("_module.js", this.args[0] + ".module.js", context);
		this.template("_.scss", this.args[0] + ".scss", context);
		this.template("_service.js", this.args[0] + ".service.js", context);
	}
});

process.on('error', function(err) {
	console.log(err);
	process.exit(2);
});