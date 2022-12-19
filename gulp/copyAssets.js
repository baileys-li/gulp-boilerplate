import gulp from "gulp";
import Path from "./_const.mjs";

export const copyAssets = () => gulp.src(Path.ASSET.source).pipe(gulp.dest(Path.ASSET.build));
