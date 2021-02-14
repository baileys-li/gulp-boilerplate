import gulp from "gulp";
import sync from "browser-sync";

import { styles } from "./styles.js";
import { pages } from "./pages.js";
import { scripts } from "./scripts.js";
import { icons } from "./icons.js";
import { images } from "./images.js";
import { assets } from "./assets.js";

import { Path } from "./_const.js";

export async function serve() {
	sync.init({
		server: Path.PAGE.build,
		notify: true,
		open: true,
		cors: true,
	});

	gulp.watch(Path.PAGE.all, gulp.series(pages, readyReload));
	gulp.watch(Path.STYLE.source, gulp.series(styles, streamStyles));

	gulp.watch(Path.SCRIPT.source, gulp.series(scripts, readyReload));
	gulp.watch(Path.ICON.source, gulp.series(icons, readyReload));
	gulp.watch(Path.IMAGE.source, gulp.series(images, readyReload));
	gulp.watch(Path.ASSET.source, gulp.series(assets, readyReload));
}

async function readyReload() {
	sync.reload();
}

async function streamStyles() {
	return gulp.src(Path.STYLE.build).pipe(sync.stream());
}
