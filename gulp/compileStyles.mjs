import gulp from "gulp";

import postcss from "gulp-postcss";
import cssnano from "cssnano";
import csso from "postcss-csso";

import Path from "./_const.js";
import rename from "gulp-rename";
import { isDev as isDevelopment } from "./mode.mjs";
import postcssPresetEnv from "postcss-preset-env";

import atImport from "postcss-import";
import nested from "postcss-nested";
import variables from "postcss-simple-vars";
import mixins from "postcss-mixins";
import calc from "postcss-calc";

const plugins = [
	atImport(),
	mixins(),
	nested(),
	variables(),
	postcssPresetEnv({
		stage: 0,
		features: {
			"focus-visible-pseudo-class": false
		}
	}),
	calc({precision: 3})
];

export function compileStyles() {
	const isDev = isDevelopment();

	!isDev &&
		plugins.push(
			cssnano({
				preset: "advanced",
			}),
			csso()
		);

	return gulp
		.src(Path.STYLE.source, {
			sourcemaps: isDev,
		})
		.pipe(postcss(plugins))
		.pipe(rename({ extname: ".css" }))
		.pipe(
			gulp.dest(Path.STYLE.build, {
				sourcemaps: ".",
			})
		);
}
