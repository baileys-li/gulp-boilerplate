const Base = {
	SOURCE: "./source/",
	BUILD: "./build/",
};
export const Path = {
	SASS: {
		source: Base.SOURCE + "styles/*.{sass,scss}",
		all: Base.SOURCE + "styles/**/*.{sass,scss}",
		build: Base.BUILD + "css/",
	},
};
