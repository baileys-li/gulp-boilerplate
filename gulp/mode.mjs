/**
 * @param {"production" | "development"} mode
 */
async function setMode(mode = "development") {
	process.env.NODE_ENV = mode;
}

const isDev = () => process.env.NODE_ENV === "development";
const isProd = () => !isDev();
const setProd = async () => await setMode("production");
const setDev = async () => await setMode("development");

export { isDev, isProd, setDev, setProd };
