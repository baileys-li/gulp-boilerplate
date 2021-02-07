import del from "del";

export async function clean() {
	return del("build");
}

