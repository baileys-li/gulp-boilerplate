/**
 * @param {"production" | "development"} mode
 */
export function setMode(mode = "development") {
	process.env.NODE_ENV = mode;
}

export const isDev = () => process.env.NODE_ENV === "development";
export const isProd = () => !isDev();
