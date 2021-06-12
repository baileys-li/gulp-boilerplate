import gulp from "gulp";
import { setDevelopment, setProduction } from "./gulp/setMode.js";
import startProject from "./gulp/startProject.js";
import clean from "./gulp/clean.js";
import serve from "./gulp/serve.js";
import lint from "./gulp/lint.js";

export const test = lint;
export const build = gulp.series(setProduction, clean, startProject);
export default gulp.series(setDevelopment, startProject, serve);
