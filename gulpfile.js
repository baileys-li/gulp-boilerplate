import gulp from "gulp";
import { styles } from "./gulp/tasks/styles.js";

export const build = gulp.series(setProduction, styles);
export default gulp.series(setDevelopment, styles);

function setProduction(cb) {
	process.env.NODE_ENV = "production";
	cb();
}
function setDevelopment(cb) {
	process.env.NODE_ENV = "development";
	cb();
}
