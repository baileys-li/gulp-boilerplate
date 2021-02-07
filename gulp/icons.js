import gulp from "gulp";
import svgstore from "gulp-svgstore";

import { Path } from "./_const.js";

export function icons() {
	return gulp
		.src(Path.ICON.source)
		.pipe(
			svgstore({
				inlineSvg: true,
			})
		)
		.pipe(gulp.dest(Path.ICON.build));
}
