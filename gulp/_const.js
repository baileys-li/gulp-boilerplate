const Base = {
	SOURCE: "./source/",
	BUILD: "./build/",
};
export const Path = {
	STYLE: {
		source: Base.SOURCE + "styles/*.{sass,scss}",
		all: Base.SOURCE + "styles/**/*.{sass,scss}",
		build: Base.BUILD + "css/",
	},

	PAGE: {
		source: Base.SOURCE + "pages/*.pug",
		all: Base.SOURCE + "pages/**/*.pug",
		build: Base.BUILD,
	},
	SCRIPT: {
		source: Base.SOURCE + "js/*.js",
		build: Base.BUILD + "js/",
	},
};
