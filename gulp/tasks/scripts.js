import gulp from "gulp";
import webpack from "webpack-stream";
import CircularDependencyPlugin from "circular-dependency-plugin";
import DuplicatePackageCheckerPlugin from "duplicate-package-checker-webpack-plugin";

import { Path } from "../_const.js";

export function scripts() {
	return gulp
		.src(Path.SCRIPT.source)
		.pipe(
			webpack({
				mode: process.env.NODE_ENV,
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
			})
		)
		.pipe(gulp.dest(Path.SCRIPT.build));
}
