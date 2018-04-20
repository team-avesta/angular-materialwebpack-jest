const path = require('path');
const webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.less', '.css'],
		modules: ['node_modules']
	},

	entry: {
		vendor: [
			'angular-material',
			'angular',
			'restangular',
			'md-steppers',
			'@uirouter/angularjs',
			'angular-animate',
			'angular-cookies',
			'angular-touch',
			'angular-sanitize',
			'angular-messages',
			'angular-aria',
			'v-accordion',
			'angular-material-data-table',
			'./node_modules/angular-material/angular-material.min.css',
			'./node_modules/v-accordion/dist/v-accordion.min.css',
			'./node_modules/angular-material-data-table/dist/md-data-table.min.css',
			'./node_modules/md-steppers/dist/md-steppers.min.css'
		]
	},
	output: {
		filename: '[name].dll.js',
		path: path.resolve('./dist/'),
		library: '[name]'
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]',
			path: path.resolve('./dist/[name].json')
		})
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [{
					loader: 'style-loader'
				},
				{
					loader: 'css-loader?sourceMap'
				},
				{
					loader: 'postcss-loader'
				}
			]
		}]
	}
};