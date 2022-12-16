import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "pug-bem";
import Path from "./_const.js";

export const compilePug = () =>
	gulp
		.src(Path.PAGE.source)
		.pipe(
			pug({
				pretty: process.env.NODE_ENV === "development",
				plugins: [pugBEM],
			})
		)
		.pipe(gulp.dest(Path.PAGE.build));
