import gulp from "gulp";
import { styles } from "./gulp/tasks/styles.js";
import { pages } from "./gulp/tasks/pages.js";
import { setDevelopment, setProduction } from "./gulp/tasks/setMode.js";

export const build = gulp.series(setProduction, pages, styles);
export default gulp.series(setDevelopment, pages, styles);
