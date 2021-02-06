import gulp from "gulp";
import sass from "gulp-dart-sass";
import sourcemaps from "gulp-sourcemaps";
import stylelint from "gulp-stylelint";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import clean from "gulp-clean-css";
import gulpIf from "gulp-if";

import { Path } from "../_const.js";

export function styles() {
	return gulp
		.src(Path.SASS.source)
		.pipe(
			stylelint({
				failAfterError: false,
				reporters: [
					{
						formatter: "string",
						console: true,
					},
				],
			})
		)
		.pipe(gulpIf(process.env.NODE_ENV === "development", sourcemaps.init()))
		.pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
		.pipe(shorthand())
		.pipe(
			gulpIf(
				process.env.NODE_ENV === "production",
				clean(
					{
						debug: true,
						compatibility: "*",
					},
					(details) => {
						console.log(
							`${details.name}: Original size: ${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
						);
					}
				),
				sourcemaps.write()
			)
		)
		.pipe(gulp.dest(Path.SASS.build));
}
