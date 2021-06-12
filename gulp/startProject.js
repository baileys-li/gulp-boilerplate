import gulp from "gulp";
import styles from "./styles.js";
import pages from "./pages.js";
import scripts from "./scripts.js";
import icons from "./icons.js";
import images from "./images.js";
import assets from "./assets.js";

const startProject =
	gulp.parallel(pages, styles, scripts, icons, images, assets);


export default startProject;
