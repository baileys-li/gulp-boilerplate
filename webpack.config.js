import CircularDependencyPlugin from "circular-dependency-plugin";
import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";

const isProd = process.env.NODE_ENV === "production" ? true : false;

export const webpackConfig = {
	mode: isProd ? "production" : "development",
	output: {
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
	plugins: [
		new CircularDependencyPlugin(),
		new DuplicatePackageCheckerPlugin(),
	],
};
