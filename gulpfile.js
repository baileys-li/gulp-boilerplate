import gulp from "gulp";
import { setDevelopment, setProduction } from "./gulp/tasks/setMode.js";
import { styles } from "./gulp/tasks/styles.js";
import { pages } from "./gulp/tasks/pages.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { svgSprite } from "./gulp/tasks/svgSprite.js";


export const build = gulp.series(setProduction, pages, styles, scripts, svgSprite);
export default gulp.series(setDevelopment, pages, styles, scripts, svgSprite);
