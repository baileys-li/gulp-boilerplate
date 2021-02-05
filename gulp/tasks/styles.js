import gulp from "gulp";
import sass from "gulp-dart-sass";
import sourcemaps from "gulp-sourcemaps";
import stylelint from "gulp-stylelint";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import clean from "gulp-clean-css";

import { Path } from "../_const.js";

export function styles() {
	let cssFile = gulp.src(Path.SASS.source).pipe(
		stylelint({
			failAfterError: false,
			reporters: [
				{
					formatter: "string",
					console: true,
				},
			],
		})
	);

	if (process.env.NODE_ENV === "development") {
		cssFile = cssFile.pipe(sourcemaps.init());
	}

	cssFile = cssFile
		.pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
		.pipe(
			autoprefixer({
				cascade: false,
			})
		)
		.pipe(shorthand());

	if (process.env.NODE_ENV === "production") {
		cssFile = cssFile.pipe(
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
			)
		);
	} else {
		cssFile = cssFile.pipe(sourcemaps.write());
	}
	return cssFile.pipe(gulp.dest(Path.SASS.build));
}
