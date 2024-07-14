const config = {
	mode: 'production',
	entry: {
		main      : './app/src/js/main.js',
		validation: './app/src/js/validation.js',
		contacts  : './app/src/js/contacts.js'
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = {
    //...
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = config;

