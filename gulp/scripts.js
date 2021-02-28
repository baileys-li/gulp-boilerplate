import gulp from "gulp";
import webpackStream from "webpack-stream";
import webpack from "webpack";
import { webpackConfig } from "../webpack.config.js";

import { Path } from "./_const.js";

export function scripts() {
	return gulp
		.src(Path.SCRIPT.source)
		.pipe(
			webpackStream(
				{ ...webpackConfig, mode: process.env.NODE_ENV },
				webpack
			)
		)
		.pipe(gulp.dest(Path.SCRIPT.build));
}
