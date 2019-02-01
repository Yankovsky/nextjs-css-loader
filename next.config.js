module.exports = {
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty',
		}

		// TODO
		// config.module.rules.push({
		// 	test: /\.js$/,
		// 	loader: 'css-loader',
		// })

		config.module.rules.push({
			test: /\.jpeg$/,
			loader: 'file-loader',
			options: {
				publicPath: '/_next/static/images/',
				outputPath: 'static/images/',
				name: '[name]-[hash].[ext]',
			},
		})

		return config
	},
}
