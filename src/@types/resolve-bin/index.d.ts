declare module "resolve-bin" {
	export function sync(path: string, opts: { executable?: string }): string;
}