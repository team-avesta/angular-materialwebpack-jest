'use strict';
var webpack = require('webpack');

module.exports = function(_path) {
	return {
		context: _path,
		devtool: 'source-map',
		output: {
			publicPath: '/',
			filename: '[name].[chunkhash].js'
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin({
				minimize: true,
				warnings: false,
				sourceMap: true,
			})
		]
	};
};