import gulp from "gulp";
import { setDevelopment, setProduction } from "./gulp/setMode.js";
import { startProject } from "./gulp/startProject.js";
import { serve } from "./gulp/serve.js";

export const build = gulp.series(setProduction, startProject);
export default gulp.series( setDevelopment, startProject, serve);
