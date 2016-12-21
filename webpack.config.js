var path = require('path')

module.exports = {
	//context: path.join(__dirname, '/src'),
	entry: {
		javascript: [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'babel-polyfill',
			'./src/app.js'
		]
	},

	output: {
		path: path.join(__dirname, "/public"),
		publicPath: "/public/",
		filename: "app.bundle.js"
	},

	/*
	resolve: {
	    extensions: ['', '.js']
	},*/
	module: {
		loaders: [ 
			{ 	
				loaders: ['react-hot', "babel-loader"],
				test: /\.js$/,
				exclude: /node_modules/
				//loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
			},
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				exclude: /node_modules/
			}
		]
	}
}
