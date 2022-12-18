import gulp from "gulp";

import { createGulpEsbuild } from "gulp-esbuild";
import Path from "./_const.mjs";
import { isDev as isDevelopment } from "./mode.mjs";


export function buildScripts() {
	const isDev = isDevelopment();

	const gulpEsbuild = createGulpEsbuild({
		incremental: isDev, // enables the esbuild's incremental build
		// piping: isDev, // enables piping
	});


	return gulp
		.src(Path.SCRIPT.source, {
			sourcemaps: isDev && false,
		})
		.pipe(
			gulpEsbuild({
				outdir: "",
				splitting: true,
				bundle: true,
				format: "esm",
				minify: !isDev,
				treeShaking: true,
			})
		)
		.pipe(
			gulp.dest(Path.SCRIPT.build, {
				sourcemaps: ".",
			})
		);
}

