import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "pug-bem";
import { isDev } from "./mode.mjs";
import Path from "./_const.mjs";

export const compilePug = () =>
	gulp
		.src(Path.PAGE.source)
		.pipe(
			pug({
				pretty: isDev(),
				plugins: [pugBEM],
			})
		)
		.pipe(gulp.dest(Path.PAGE.build));
