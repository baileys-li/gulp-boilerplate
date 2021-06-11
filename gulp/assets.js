import gulp from "gulp";
import Path from "./_const.js";

export default gulp.series(copyAssets, copyData);

function copyAssets() {
	return gulp.src(Path.ASSET.source).pipe(gulp.dest(Path.ASSET.build));
}

function copyData() {
	return gulp
		.src([Path.DATA.source, "!" + Path.DATA.hidden])
		.pipe(gulp.dest(Path.DATA.build));
}
