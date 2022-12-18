import gulp from "gulp";

import postcss from "gulp-postcss";
import cssnano from "cssnano";
import csso from "postcss-csso";

import Path from "./_const.mjs";
import { isDev as isDevelopment } from "./mode.mjs";
import calc from "postcss-calc";
import logical from "postcss-logical";

import dartSass from "sass";
import gulpSass from "gulp-sass";
import minmax from "postcss-media-minmax";
import autoprefixer from "autoprefixer";
const sass = gulpSass(dartSass);

const plugins = [minmax(), autoprefixer(), calc({ precision: 3 }), logical()];

export function compileStyles() {
	const isDev = isDevelopment();

	!isDev &&
		plugins.push(
			cssnano({
				preset: "advanced",
			}),
			csso()
		);

	return (
		gulp
			.src(Path.STYLE.source, {
				sourcemaps: isDev,
			})
			.pipe(
				sass({
					outputStyle: isDev ? "expanded" : "compressed",
					indentType: "tab",
					indentWidth: 2,
					precision: 2,
					includePaths: ["node_modules", Path.STYLE.common],
				}).on("error", sass.logError)
			)
			.pipe(postcss(plugins))
			.pipe(
				gulp.dest(Path.STYLE.build, {
					sourcemaps: ".",
				})
			)
	);
}
