import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "en",
  locales: ["en", "zh-TW"],
  showDefaultLocale: true,
  routes: {
    "en": {
      about: "about",
      posts: "posts", 
      notes: "notes",
    },
    "zh-TW": {
      about: "關於",
      posts: "文章", 
      notes: "筆記",
    },
  },
  load: ["server", "client"],
  ns: ["common"],
  fallbackNS: "common",
  i18nextServer: {
    debug: false,
  },
  i18nextClient: {
    debug: false,
  },
};

export default config;