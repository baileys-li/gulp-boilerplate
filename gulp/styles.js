import gulp from "gulp";
import sass from "gulp-dart-sass";
import postcss from "gulp-postcss";

import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { Path } from "./_const.js";

export function styles() {
	const isDev = process.env.NODE_ENV === "development";

	const pluginsPostCSS = isDev
		? []
		: [
			autoprefixer(),
			cssnano({
				preset: "advanced",
			}),
		];

	return gulp
		.src(Path.STYLE.source, {
			sourcemaps: isDev,
		})
		.pipe(
			sass({
				outputStyle: isDev ? "expanded" : "compressed",
				indentType: "tab",
			}).on("error", sass.logError)
		)
		.pipe(postcss(pluginsPostCSS))

		.pipe(
			gulp.dest(Path.STYLE.build, {
				sourcemaps: ".",
			})
		);
}
