import gulp from "gulp";
import webpackStream from "webpack-stream";
import webpack from "webpack";
import { webpackConfig } from "../webpack.config.js";

import { Path } from "./_const.js";

export function scripts() {
	console.log(webpackConfig);
	return gulp
		.src(Path.SCRIPT.source)
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest(Path.SCRIPT.build));
}
