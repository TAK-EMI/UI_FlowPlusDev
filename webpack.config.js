module.exports = {
	mode: "development",
	entry: "./src/main.tsx",
	output: {
		path: `${__dirname}/dist/js`,
		filename: "main.js"
	},
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.[jt]sx?$/,
				loader: 'prettier-loader',
				exclude: /node_modules/,
			},
			{
				enforce: "pre",
				test: /\.[jt]sx?$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					fix: true,
					cache: true
				}
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader"
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	}
};
