const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const rootDir = path.resolve(__dirname, 'src');

module.exports = {
	entry: path.resolve(__dirname, 'src/app.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(rootDir, 'index.html')
		}),
		new ExtractTextPlugin('style.bundle.css')
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					use: 'css-loader'
				})
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
