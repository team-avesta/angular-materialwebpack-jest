'use strict';
var webpack = require('webpack');

module.exports = function(_path) {
	return {
		context: _path,
		devtool: 'inline-eval-cheap-source-map',
		devServer: {
			contentBase: './dist',
			hot: true,
			inline: true
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	};
};