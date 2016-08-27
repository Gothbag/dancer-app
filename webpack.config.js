var path = require("path");
var webpack = require("webpack");

module.exports = {
	context: path.join(__dirname, "src"),
	entry: [
		//"babel-polyfill",
		"./js/client.js"
	],
	
	module: {
		loaders: [ 
			{
				test: /\.jsx?$/,
				exclude: /(nodule_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-object-assign']
				}
			
			}
		]
	},
	output: {
		path: path.join(__dirname, "src"),
		filename: "client.min.js"
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({mangle: false, sourceMap: false})
	]
};