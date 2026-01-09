declare module "astro-i18next" {
	interface I18nextOptions {
		defaultLocale?: string;
		locales?: string[];
		showDefaultLocale?: boolean;
		trailingSlash?: "always" | "never" | "ignore";
		i18nextClient?: any;
		i18nextClientPlugins?: any;
		i18nextServer?: any;
		i18nextServerPlugins?: any;
		routes?: Record<string, string>;
	}

	export interface AstroI18nextConfig extends I18nextOptions {}

	function astroI18next(options?: I18nextOptions): any;
	export default astroI18next;
}
