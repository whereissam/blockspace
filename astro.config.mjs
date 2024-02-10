import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon"
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://block-spaces.netlify.app/',
  compressHTML: true,
  integrations: [
    mdx(), 
    icon(), 
    tailwind({
    applyBaseStyles: false,
  }), 
  compress(),
  partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  }),
],
})
