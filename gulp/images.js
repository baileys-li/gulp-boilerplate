import gulp from "gulp";
import squoosh from "gulp-squoosh";
import cache from "gulp-cache";
import path from "path";

import Path from "./_const.js";

function processImages() {
	return gulp
		.src(Path.IMAGE.source)
		.pipe(
			cache(
				squoosh(({ filePath }) => ({
					encodeOptions: {
						avif: {},
						webp: { quality: 80 },
						// wp2: {}
						...(path.extname(filePath) === ".png"
							? { oxipng: {} }
							: { mozjpeg: {} }),
					},
				}))
			)
		)
		.pipe(gulp.dest(Path.IMAGE.build));
}

export default processImages;
