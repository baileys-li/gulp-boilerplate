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

	PAGES: {
		source: Base.SOURCE + "pages/*.pug",
		all: Base.SOURCE + "pages/**/*.pug",
		build: Base.BUILD,
	},
};
