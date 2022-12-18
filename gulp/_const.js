const Base = {
	SOURCE: "source",
	BUILD: "build",
};

const Extension = {
	CSS: "postcss,pcss,css,scss"
};

const Path = {
	STYLE: {
		watch: `${Base.SOURCE}/styles/**/*.{${Extension.CSS}}`,
		source: `${Base.SOURCE}/styles/*.{${Extension.CSS}}`,
		common: `${Base.SOURCE}/styles/common/`,
		build: `${Base.BUILD}/css/`,
	},
	PAGE: {
		source: `${Base.SOURCE}/pages/*.pug}`,
		watch: `${Base.SOURCE}/pages/**/*.pug`,
		build: Base.BUILD,
	},
	SCRIPT: {
		source: Base.SOURCE + "js/*.js",
		build: Base.BUILD + "js/",
	},
	ICON: {
		source: Base.SOURCE + "icons/**/*.svg",
		build: Base.BUILD,
	},
	IMAGE: {
		source: Base.SOURCE + "images/**/*",
		build: Base.BUILD + "img/",
	},
	ASSET: {
		source: Base.SOURCE + "assets/**/*",
		build: Base.BUILD,
	},
};

export default Path;
