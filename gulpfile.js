import gulp from "gulp";
import { setDevelopment, setProduction } from "./gulp/tasks/setMode.js";
import { styles } from "./gulp/tasks/styles.js";
import { pages } from "./gulp/tasks/pages.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { icons } from "./gulp/tasks/icons.js";
import { images } from "./gulp/tasks/images.js";


export const build = gulp.series(setProduction, pages, styles, scripts, icons, images);
export default gulp.series(setDevelopment, pages, styles, scripts, icons, images);
