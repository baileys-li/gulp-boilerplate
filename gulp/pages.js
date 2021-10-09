import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "gulp-pugbem";
import Path from "./_const.js";

function compilePug() {
	return gulp
		.src(Path.PAGE.source)
		.pipe(
			pug({
				pretty: process.env.NODE_ENV === "development",
				plugins: [pugBEM],
			})
		)
		.pipe(gulp.dest(Path.PAGE.build));
}

export default compilePug;
