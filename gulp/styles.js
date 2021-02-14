import gulp from "gulp";
import sass from "gulp-dart-sass";
import autoprefixer from "gulp-autoprefixer";
import shorthand from "gulp-shorthand";
import clean from "gulp-clean-css";
import gulpIf from "gulp-if";

import { Path } from "./_const.js";

export function styles() {
	return (
		gulp
			.src(Path.STYLE.source, { sourcemaps: true })
			.pipe(
				sass({
					outputStyle: "expanded",
					indentType: "tab",
					sourceMap: true,
					sourceMapContents: true,
					sourceMapRoot: "./",
				}).on("error", sass.logError)
			)
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
					)
				)
			)
			.pipe(
				gulpIf(
					process.env.NODE_ENV === "development",
					gulp.dest(Path.STYLE.build, { sourcemaps: "." }),
					gulp.dest(Path.STYLE.build)
				)
			)
	);
}
