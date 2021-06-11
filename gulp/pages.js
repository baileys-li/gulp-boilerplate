import gulp from "gulp";
import pug from "gulp-pug";
import pugBEM from "gulp-pugbem";
import mergeJSON from "gulp-merge-json";
import fs from "fs";
import Path from "./_const.js";

export default gulp.series(prepareData, compilePug);

function compilePug() {
	return gulp
		.src(Path.PAGE.source)
		.pipe(pug({
			pretty: process.env.NODE_ENV === "development",
			plugins: [pugBEM],
			data: JSON.parse(fs.readFileSync("./temp/combined.json")),
		}))
		.pipe(gulp.dest(Path.PAGE.build));
}

function prepareData() {
	return gulp
		.src(Path.DATA.source)
		.pipe(mergeJSON())
		.pipe(gulp.dest(Path.DATA.combined));
}
