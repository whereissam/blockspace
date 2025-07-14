# Blockspace

A modern, multilingual blog built with **Astro** featuring blockchain, AI, and technology content with full internationalization support.

## ✨ Key Features

### 🌍 Internationalization
- **Bilingual Support**: English and Traditional Chinese (zh-TW)
- **Language-Aware Routing**: `/en/` and `/zh-TW/` prefixed URLs
- **Content Filtering**: Separate content for each language
- **Automatic Language Detection**: URL-based language switching
- **Translated UI**: Navigation, footer, and interface elements in both languages

### 📝 Content Management
- **Blog Posts**: Long-form articles on AI, blockchain, and technology (39+ posts)
- **Notes**: Short-form announcements and updates
- **Series Support**: Organize related posts into series with ordering
- **Draft System**: Hide unpublished content in production
- **Rich Metadata**: SEO-optimized with tags, descriptions, and Open Graph images
- **Tag System**: Categorization with filterable tag pages

### 🎨 Modern Design
- **Dark/Light Mode**: System preference detection with manual toggle
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Custom Typography**: SF Pro Rounded font family
- **Accessibility**: WCAG-compliant with skip links and proper ARIA
- **Custom Theme System**: CSS custom properties with extensive color palette

### 🔍 Advanced Features
- **Full-Text Search**: Pagefind integration with modal interface (`/` key shortcut)
- **RSS Feeds**: Multiple feeds for different languages and content types
- **Table of Contents**: Interactive navigation for long articles with scroll tracking
- **Social Integration**: Webmentions support for comments and likes
- **Performance Optimized**: Static generation with minimal JavaScript
- **Open Graph Images**: Automatic generation with custom styling

## 🛠️ Tech Stack

### Core Framework
- **[Astro](https://astro.build/)** `5.1.2` - The web framework for content-driven websites
- **[TypeScript](https://www.typescriptlang.org/)** `5.7.2` - JavaScript with syntax for types
- **[Node.js](https://nodejs.org/)** `18+` - JavaScript runtime

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** `3.4.17` - Utility-first CSS framework
- **[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)** `0.5.15` - Beautiful typographic defaults
- **[Autoprefixer](https://autoprefixer.github.io/)** `10.4.20` - CSS vendor prefixes
- **[cssnano](https://cssnano.co/)** `7.0.6` - CSS optimization and minification

### Icons & Assets
- **[Astro Icon](https://astro-icon.dev/)** `1.1.5` - Icon component library
- **[@iconify-json/hugeicons](https://iconify.design/)** `1.2.3` - HugeIcons icon set
- **[@iconify-json/mdi](https://iconify.design/)** `1.2.2` - Material Design Icons
- **[@iconify-json/solar](https://iconify.design/)** `1.2.2` - Solar icon set
- **[Sharp](https://sharp.pixelplumbing.com/)** `0.33.5` - Image processing and optimization

### Content & Markdown
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** `4.0.3` - MDX support for Astro
- **[rehype-external-links](https://github.com/rehypejs/rehype-external-links)** `3.0.0` - Add rel and target to external links
- **[rehype-pretty-code](https://rehype-pretty-code.netlify.app/)** `0.14.0` - Syntax highlighting for code blocks
- **[rehype-unwrap-images](https://github.com/remarkjs/remark-unwrap-images)** `1.0.0` - Remove paragraph wrapping from images
- **[remark-directive](https://github.com/remarkjs/remark-directive)** `3.0.0` - Support for directives (custom syntax)
- **[mdast-util-directive](https://github.com/syntax-tree/mdast-util-directive)** `3.0.0` - MDX directive utilities
- **[mdast-util-to-markdown](https://github.com/syntax-tree/mdast-util-to-markdown)** `2.1.2` - Serialize MDX to markdown
- **[mdast-util-to-string](https://github.com/syntax-tree/mdast-util-to-string)** `4.0.0` - Get text content from MDX
- **[unified](https://unifiedjs.com/)** `11.0.5` - Interface for parsing, inspecting, transforming, and serializing content
- **[unist-util-visit](https://github.com/syntax-tree/unist-util-visit)** `5.0.0` - Utility to visit nodes in a syntax tree
- **[reading-time](https://github.com/ngryman/reading-time)** `1.5.0` - Estimate reading time for articles

### Search & SEO
- **[Pagefind](https://pagefind.app/)** `1.3.0` - Static search library
- **[@pagefind/default-ui](https://pagefind.app/)** `1.3.0` - Default search UI components
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** `3.2.1` - Automatic sitemap generation
- **[@astrojs/rss](https://docs.astro.build/en/guides/rss/)** `4.0.11` - RSS feed generation
- **[astro-robots-txt](https://github.com/alextim/astro-robots-txt)** `1.0.0` - robots.txt generation
- **[astro-seo](https://github.com/jonasmerlin/astro-seo)** `0.8.4` - SEO meta tags
- **[astro-webmanifest](https://github.com/alextim/astro-webmanifest)** `1.0.0` - Web app manifest generation

### Internationalization
- **[astro-i18next](https://github.com/yassinedoghri/astro-i18next)** `1.0.0-beta.21` - i18n integration for Astro
- **[i18next](https://www.i18next.com/)** `25.2.1` - Internationalization framework

### Open Graph Images
- **[Satori](https://github.com/vercel/satori)** `0.12.0` - Generate images from HTML/CSS
- **[satori-html](https://github.com/natemoo-re/satori-html)** `0.3.2` - HTML support for Satori
- **[@resvg/resvg-js](https://github.com/yisibl/resvg-js)** `2.6.2` - SVG rendering for Node.js
- **[hastscript](https://github.com/syntax-tree/hastscript)** `9.0.0` - Create HTML/SVG trees

### Code Quality & Development
- **[@biomejs/biome](https://biomejs.dev/)** `1.9.4` - Fast formatter and linter
- **[Prettier](https://prettier.io/)** `3.4.2` - Code formatter
- **[prettier-plugin-astro](https://github.com/withastro/prettier-plugin-astro)** `0.14.1` - Prettier plugin for Astro
- **[prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)** `0.6.9` - Prettier plugin for Tailwind CSS
- **[@astrojs/check](https://docs.astro.build/en/reference/cli-reference/#astro-check)** `0.9.4` - Astro type checking

### Syntax Highlighting
- **[@shikijs/transformers](https://shiki.style/)** `1.25.1` - Code syntax highlighting transformers

## 🚀 Astro Integrations

### Official Astro Integrations
- **[@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)** - Tailwind CSS integration
- **[@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/)** - MDX support for component-driven content
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** - Automatic sitemap generation
- **[@astrojs/rss](https://docs.astro.build/en/guides/rss/)** - RSS feed generation

### Third-Party Astro Integrations
- **[astro-i18next](https://github.com/yassinedoghri/astro-i18next)** - Complete i18n solution with routing and content management
- **[astro-icon](https://astro-icon.dev/)** - Optimized icon component system
- **[astro-robots-txt](https://github.com/alextim/astro-robots-txt)** - robots.txt file generation
- **[astro-seo](https://github.com/jonasmerlin/astro-seo)** - SEO meta tags and social media optimization
- **[astro-webmanifest](https://github.com/alextim/astro-webmanifest)** - Progressive Web App manifest generation

### Content Processing Pipeline
- **Markdown Processing**: MDX → remark → rehype → HTML
- **Syntax Highlighting**: Shiki with custom transformers for code blocks
- **Image Optimization**: Sharp for resizing, format conversion, and compression
- **Search Indexing**: Pagefind for client-side full-text search
- **RSS Generation**: Multi-language feeds for posts and notes
- **Open Graph**: Dynamic image generation using Satori

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ScrewFast

# Install dependencies
npm install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev

# The site will be available at http://localhost:4321
```

### Building for Production

```bash
# Build the site
npm run build

# Generate search index
npm run postbuild

# Preview the build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer with i18n support
│   ├── blog/           # Blog-specific components (Masthead, TOC, PostPreview)
│   ├── note/           # Note components
│   └── ...             # Utility components (Badge, Search, ThemeToggle)
├── content/            # Content collections
│   ├── post/           # Blog posts (39+ articles)
│   ├── note/           # Short notes (2 announcements)
│   └── series/         # Content series definitions (2 series)
├── layouts/            # Page layouts (Base, BlogPost, Series)
├── pages/              # Route definitions
│   ├── en/             # English pages
│   ├── zh-TW/          # Chinese pages
│   ├── posts/          # Blog pagination and individual posts
│   ├── notes/          # Notes pagination and individual notes
│   ├── tags/           # Tag-based filtering
│   └── ...             # Static pages (about, 404)
├── data/               # Data utilities (post filtering, language detection)
├── utils/              # Helper functions (date, DOM, TOC generation)
├── styles/             # Global styles and theme variables
└── types.ts            # TypeScript definitions
```

## 🌐 Content Management

### Local CMS Interface

This project includes a built-in content management system accessible at `/cms` when running the development server:

```bash
# Start the dev server
npm run dev

# Visit the CMS interface
http://localhost:4321/cms
```

**CMS Features:**
- **Form-based editing**: Title, description, content, tags, and series
- **Image upload**: Cover image support with automatic optimization
- **Draft system**: Create draft posts that won't appear in production
- **Live preview**: See generated markdown before publishing
- **Series integration**: Add posts to existing series
- **Auto-slug generation**: Automatic URL-friendly slugs from titles

### Adding Blog Posts

#### Method 1: Using the CMS Interface (Recommended)
1. Navigate to `http://localhost:4321/cms`
2. Fill out the form with your post details
3. Choose "Published" or "Draft" status
4. Upload a cover image (optional)
5. Write your content in Markdown
6. Click "Preview" to see the generated frontmatter
7. Click "Create Post" to save the files

#### Method 2: Manual File Creation
Create a new Markdown file in `src/content/post/`:

```yaml
---
title: "Your Post Title"
description: "Brief description of the post"
publishDate: "2024-01-01"
tags: ["AI", "Blockchain", "Technology"]
draft: false
language: "en" # or "zh-TW" for Chinese content
seriesId: "optional-series-id"
orderInSeries: 1
coverImage:
  src: "./cover.jpg"
  alt: "Cover image description"
---

Your content here...
```

#### Draft System
- **Published posts**: Set `draft: false` (default in CMS)
- **Draft posts**: Set `draft: true` 
- **Behavior**: Draft posts are excluded from production builds but visible in development

### Adding Notes

Create a new Markdown file in `src/content/note/`:

```yaml
---
title: "Note Title"
description: "Optional description"
publishDate: "2024-01-01T10:00:00Z"
language: "en" # or "zh-TW" for Chinese content
---

Your note content...
```

### Creating Series

1. Define the series in `src/content/series/`:

```yaml
---
id: "my-series"
title: "Series Title"
description: "Series description"
featured: true
---
```

2. Add posts to the series using `seriesId` and `orderInSeries` in post frontmatter.

### CMS API Endpoint

The CMS also provides a REST API endpoint at `/api/cms` for programmatic content creation:

```bash
# Create a new post via API
curl -X POST http://localhost:4321/api/cms \
  -F "title=My New Post" \
  -F "description=Post description" \
  -F "content=# Hello World\n\nThis is my content." \
  -F "tags=web3,blockchain,ai" \
  -F "draft=false" \
  -F "seriesId=my-series" \
  -F "coverImage=@/path/to/image.jpg" \
  -F "coverImageAlt=Cover image description"
```

**API Features:**
- **Form data support**: Standard multipart/form-data
- **Image upload**: Automatic processing and optimization
- **Series validation**: Checks if series exists before creating posts
- **Error handling**: Detailed error messages for debugging
- **File generation**: Creates both markdown and image files automatically

## 🌍 Internationalization

### Language Structure
- **English routes**: `/en/` prefix (e.g., `/en/posts/`, `/en/about/`)
- **Chinese routes**: `/zh-TW/` prefix (e.g., `/zh-TW/posts/`, `/zh-TW/about/`)
- **Automatic filtering**: Content filtered by `language` field in frontmatter
- **Fallback messages**: Chinese pages show "coming soon" when no translated content exists

### Adding Translations

1. **Content translations**: Add `language: "zh-TW"` to Chinese content frontmatter
2. **UI translations**: Update translation objects in Header and Footer components
3. **Route translations**: Configure in `astro-i18next.config.ts`

### Language Detection
- **URL-based**: Automatically detects language from path (`/zh-TW` vs `/en`)
- **Language switcher**: Globe icon dropdown with proper routing
- **Navigation**: All menu links are language-aware

## 🎨 Customization

### Site Configuration

Edit `src/site.config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  author: "Your Name",
  title: "Your Site Title",
  description: "Your site description",
  lang: "en-GB",
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short", 
      year: "numeric",
    },
  },
};
```

### Navigation Menu

Update `menuLinks` in `src/site.config.ts`:

```typescript
export const menuLinks = [
  { path: "/", title: "Home", key: "navigation.home" },
  { path: "/about/", title: "About", key: "navigation.about" },
  { path: "/posts/", title: "Blog", key: "navigation.blog" },
  { path: "/notes/", title: "Notes", key: "navigation.notes" },
];
```

### Theme Customization

1. **Colors**: Edit `tailwind.config.ts` color definitions
2. **Typography**: Modify font families in global CSS
3. **Layout**: Adjust spacing and sizing in Tailwind config
4. **Dark mode**: Customize theme colors in CSS custom properties

### Search Configuration

Search is powered by **Pagefind**:

1. **Customization**: Edit `src/components/Search.astro`
2. **Styling**: Update CSS custom properties for search UI
3. **Indexing**: Configure in postbuild script
4. **Keyboard shortcut**: Press `/` to open search modal

## 🔧 Advanced Features

### SEO & Social

- **Automatic sitemap** generation
- **RSS feeds** for posts and notes in both languages
- **Open Graph images** automatically generated using Satori
- **Meta tags** optimized for social sharing
- **Robots.txt** configuration
- **Web app manifest** for PWA features

### Performance Optimizations

- **Static site generation** (SSG) with Astro
- **Minimal JavaScript**: Progressive enhancement approach
- **Image optimization**: Built-in Astro image processing
- **Font optimization**: Local font loading with display: swap
- **CSS optimization**: Tailwind purging and cssnano
- **Search optimization**: Lazy-loaded Pagefind integration

### Component Architecture

**Utility Components**:
- `Badge` - 8 variants for tags and labels
- `FormattedDate` - Localized date formatting
- `Paginator` - Navigation pagination
- `Search` - Full-text search modal
- `ThemeToggle` - Dark/light mode switcher
- `LanguageToggle` - Language switching dropdown

**Layout Components**:
- `Header` - Navigation with i18n support
- `Footer` - Site footer with translations
- `BaseHead` - SEO meta tags and social media

**Content Components**:
- `PostPreview` - Blog post cards
- `TOC` - Table of contents with scroll tracking
- `Masthead` - Post header with metadata
- `Note` - Short-form content display
- `SeriesPanel` - Series navigation

## 📊 Content Analytics

### Current Content
- **39+ blog posts** covering AI, blockchain, technology, and business
- **2 notes** for announcements
- **2 content series** (Citrus docs, Markdown elements)
- **Extensive tagging** system with 80+ unique tags
- **Multi-language** support with English primary content

### Built-in Analytics
- **Reading time** calculation for posts
- **Tag popularity** tracking
- **Series progress** indication
- **Year-based** post organization

## 🛠️ Development Commands

```bash
# Development
npm run dev          # Start dev server (port 4321)
npm run build        # Build for production
npm run postbuild    # Generate search index
npm run preview      # Preview production build

# Code Quality  
npm run lint         # Run Biome linter
npm run format       # Format with Biome + Prettier
npm run check        # Astro type checking

# Advanced
npm run format:code     # Format code only
npm run format:imports  # Format import statements
```

## 📱 Responsive Features

- **Mobile-first design** with breakpoints: xs (320px), sm, md, lg, xl
- **Adaptive navigation**: Collapsible mobile menu with smooth animations
- **Touch-optimized**: Proper tap targets and gesture support
- **Responsive typography**: Fluid text scaling across devices
- **Image responsiveness**: Automatic optimization for different screen sizes

## 🔒 Security & Privacy

- **Privacy-focused**: No tracking by default
- **Secure links**: External links use `nofollow` and `noreferrer`
- **Content security**: Ready for CSP implementation
- **Safe assets**: Images and fonts served locally
- **No third-party**: Minimal external dependencies

## 🌟 Deployment

### Recommended Platforms
- **Vercel** - Optimized for Astro with zero-config deployment
- **Netlify** - Excellent for static sites with form handling
- **GitHub Pages** - Free hosting for open source projects
- **Cloudflare Pages** - Fast global CDN with edge computing

### Environment Setup

For webmentions support (optional):
```bash
WEBMENTION_API_KEY=your_webmention_key
WEBMENTION_URL=https://yourdomain.com
WEBMENTION_PINGBACK=https://webmention.io/yourdomain.com/webmention
```

### Build Process
1. **Static generation**: All pages pre-rendered
2. **Search indexing**: Pagefind generates search database
3. **Asset optimization**: Images, fonts, and CSS optimized
4. **Sitemap generation**: Automatic XML sitemap creation

## 🎯 Content Strategy

### Current Topics
- **AI & Machine Learning**: Claude Code, AI agents, scientific discovery
- **Blockchain & Web3**: DeFi, stablecoins, tokenization, security
- **Technology**: Open source, development tools, frameworks
- **Business**: Startup strategies, growth, fundraising

### Content Organization
- **Series-based**: Related posts grouped for better navigation
- **Tag-driven**: Extensive categorization for discoverability  
- **Language-specific**: Separate content streams for different audiences
- **Time-organized**: Year-based grouping for historical context

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow existing code style (Biome + Prettier)
- Add TypeScript types for new features
- Test responsive design on multiple devices
- Ensure accessibility compliance
- Update documentation for new features

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

**Inspiration**:
This theme was inspired by **[Astro Theme Cactus](https://github.com/chrismwilliams/astro-theme-cactus)** by Chris Williams and **[Astro Citrus](https://github.com/artemkutsan/astro-citrus)** by Artem Kutsan.

---

**Blockspace** - Exploring the intersection of blockchain, AI, and technology through in-depth articles and insights in multiple languages. 🌐🚀