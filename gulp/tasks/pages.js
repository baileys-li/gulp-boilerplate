import gulp from "gulp";
import pug from "gulp-pug";
import pugLinter from "gulp-pug-linter";
import { htmlValidator } from "gulp-w3c-html-validator";
import bemValidator from "gulp-html-bem-validator";
import gulpIf from "gulp-if";

import { Path } from "../_const.js";

export function pages() {
	return gulp
		.src(Path.PAGES.source)
		.pipe(pugLinter({ reporter: "default" }))
		.pipe(
			gulpIf(
				process.env.NODE_ENV === "development",
				pug({ pretty: true }),
				pug({ pretty: false })
			)
		)
		.pipe(htmlValidator.analyzer())
		.pipe(htmlValidator.reporter())
		.pipe(bemValidator())
		.pipe(gulp.dest(Path.PAGES.build));
}
