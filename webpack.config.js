module.exports = {
	context: __dirname + '/src',
	entry: {
		javascript: ['babel-polyfill', './app.js']
	},
	output: {
		path: __dirname + "/public",
		publicPath: "/public/",
		filename: "app.bundle.js"
	},
	resolve: {
	    extensions: ['', '.js']
	},
	debug: true,
	module: {
		loaders: [ 
			{ 	
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
				//loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
			},
			{
				test: /\.css/,
				loaders: ['style', 'css'],
				exclude: /node_modules/
			}
		]
	}
}
