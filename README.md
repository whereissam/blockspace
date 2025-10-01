# Blockspace

A fast, multilingual blog exploring blockchain, AI, and technology. Built with Astro and optimized for performance.

## Features

**🌍 i18n** • English & Traditional Chinese with language-aware routing
**📝 CMS** • Built-in content editor at `/cms` with draft system and series support
**🔍 Search** • Full-text search with Pagefind (press `/` to open)
**🎨 Theme** • Dark/light mode with responsive mobile-first design
**⚡️ Fast** • Static generation with minimal JavaScript and automatic optimization

## Tech Stack

[Astro](https://astro.build/) • [TypeScript](https://www.typescriptlang.org/) • [Tailwind CSS](https://tailwindcss.com/) • [MDX](https://mdxjs.com/) • [Pagefind](https://pagefind.app/) • [Satori](https://github.com/vercel/satori)

## Quick Start

```bash
# Install dependencies
bun install

# Start dev server (http://localhost:4321)
bun run dev

# Build for production
bun run build && bun run postbuild
```

## Project Structure

```
src/
├── content/
│   ├── post/{en,zh-TW}/    # Blog posts by language
│   ├── note/{en,zh-TW}/    # Short notes by language
│   └── series/             # Content series
├── pages/
│   ├── {en,zh-TW}/         # Localized routes
│   ├── posts/              # Blog routes
│   └── cms.astro           # Built-in CMS
├── components/             # UI components
├── layouts/                # Page templates
└── styles/                 # Global styles
```

## Content Management

Visit `/cms` to create and manage posts with the built-in editor. Features include:

- Form-based editing with live preview
- Image upload and optimization
- Draft system and series support
- REST API at `/api/cms`

### Adding Content

Create posts in `src/content/post/{en,zh-TW}/`:

```yaml
---
title: "Post Title"
description: "Brief description"
publishDate: "2024-01-01"
tags: ["AI", "Blockchain"]
draft: false
---

Content here...
```

## Customization

**Site config** → `src/site.config.ts`
**Theme colors** → `tailwind.config.ts`
**Navigation** → `src/site.config.ts` (`menuLinks`)

## Commands

```bash
bun run dev          # Dev server
bun run build        # Production build
bun run postbuild    # Generate search index
bun run preview      # Preview build
bun run format       # Format code
bun run check        # Type check
```

## Deployment

Deploy to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. All pages are statically generated for optimal performance.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

**Inspiration**:
This theme was inspired by **[Astro Theme Cactus](https://github.com/chrismwilliams/astro-theme-cactus)** by Chris Williams and **[Astro Citrus](https://github.com/artemkutsan/astro-citrus)** by Artem Kutsan.

---

**Blockspace** - Exploring the intersection of blockchain, AI, and technology through in-depth articles and insights in multiple languages. 🌐🚀