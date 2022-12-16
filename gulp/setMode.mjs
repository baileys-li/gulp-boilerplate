/**
 * @param {"production" | "development"} mode
 */
export function setMode(mode = "development") {
	process.env.NODE_ENV = mode;
}
