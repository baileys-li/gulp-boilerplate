import gulp from "gulp";
import pug from "gulp-pug";
import pugbem from "gulp-pugbem";

import Path from "./_const.js";


export default function pages() {
	return gulp
		.src(Path.PAGE.source)
		.pipe(pug({
			pretty: process.env.NODE_ENV === "development",
			plugins: [pugbem]
		}))
		.pipe(gulp.dest(Path.PAGE.build));
}
