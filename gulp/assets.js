import gulp from "gulp";
import Path from "./_const.js";

export default copyAssets;

function copyAssets() {
	return gulp.src(Path.ASSET.source).pipe(gulp.dest(Path.ASSET.build));
}
