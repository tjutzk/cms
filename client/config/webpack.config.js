const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	entry: {
		app:'./src/index.js'
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, '../cms')
	},
	devtool: '#cheap-module-eval-source-map',
	devServer: {
		contentBase: './cms',
		hot: true,
		host: '0.0.0.0',
		port: 9999,
		overlay: {
			errors: true,
		},
	},
	resolve: {
		alias:{
			'@': path.resolve(__dirname, '../src'),
			Pages: path.resolve(__dirname, '../src/pages'),
			Utils:path.resolve(__dirname, '../src/utils'),
		},
		extensions: [
			'.js',
			'.vue'
		]
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					'style-loader',
					'css-loader'
				]
			},
			{
				test:/\.vue$/,
				use:[
					'vue-loader',
				]	
			},
			{
				test:/\.ts$/,
				use:[
					'ts-loader',
				]	
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template:'./index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};