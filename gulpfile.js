import gulp from "gulp";
import { setDevelopment, setProduction } from "./gulp/tasks/setMode.js";
import { startProject } from "./gulp/tasks/startProject.js";
import { clean } from "./gulp/tasks/clean.js";
import { serve } from "./gulp/tasks/serve.js";

export const build = gulp.series(clean, setProduction, startProject);
export default gulp.series(clean, setDevelopment, startProject, serve);
