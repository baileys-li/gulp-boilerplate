import gulp from "gulp";

import sass from "gulp-dart-sass";

import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import csso from "postcss-csso";
import minmax from "postcss-media-minmax";

import {
	Path
} from "./_const.js";

export function styles() {
	const isDev = process.env.NODE_ENV === "development";

	const pluginsPostCSS = isDev ? [minmax()] : [
		minmax(),
		autoprefixer(),
		cssnano({
			preset: "advanced",
		}),
		csso()
	];

	return gulp
		.src(Path.STYLE.source, {
			sourcemaps: isDev,
		})
		.pipe(
			sass({
				outputStyle: isDev ? "expanded" : "compressed",
				indentType: "tab",
				includePaths: ["node_modules"]
			}).on("error", sass.logError)
		)
		.pipe(postcss(pluginsPostCSS))

		.pipe(
			gulp.dest(Path.STYLE.build, {
				sourcemaps: ".",
			})
		);
}
