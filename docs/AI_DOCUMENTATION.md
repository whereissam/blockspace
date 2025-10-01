# AI Documentation for Blockspace

## Project Overview

Blockspace is a modern, multilingual blog built with Astro 5.10.1 that focuses on blockchain, AI, and technology content. The project features comprehensive internationalization (English/Chinese), a built-in CMS, full-text search, and extensive content management capabilities.

## Architecture

### Core Technology Stack
- **Framework**: Astro 5.10.1 (Server mode with Netlify adapter)
- **Language**: TypeScript 5.7.2
- **Styling**: Tailwind CSS 3.4.17 with custom typography
- **Build Tool**: Vite with custom font processing
- **Search**: Pagefind 1.3.0 for client-side full-text search
- **Content**: MDX 4.0.3 with extensive plugin ecosystem

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Header, Footer with i18n
│   ├── blog/           # Blog-specific components
│   └── ...             # Utility components
├── content/            # Content collections
│   ├── post/           # Blog posts (English/Chinese)
│   ├── note/           # Short-form content
│   └── series/         # Content series definitions
├── layouts/            # Page layouts
├── pages/              # Route definitions with i18n
├── data/               # Data utilities
├── utils/              # Helper functions
└── styles/             # Global styles
```

## Key Features

### 1. Internationalization (i18n)
- **Languages**: English (default) and Traditional Chinese (zh-TW)
- **Routing**: URL-based with `/en/` and `/zh-TW/` prefixes
- **Content**: Language-specific content filtering via frontmatter
- **UI**: Translated navigation and interface elements

### 2. Content Management System
- **Built-in CMS**: Accessible at `/cms` during development
- **REST API**: `/api/cms` endpoint for programmatic content creation
- **Features**: Form-based editing, image upload, draft system, series integration
- **File Generation**: Automatic markdown and asset creation

### 3. Content Types
- **Posts**: Long-form articles with full metadata support
- **Notes**: Short-form announcements and updates
- **Series**: Grouped content with ordering and navigation

### 4. Search & Discovery
- **Full-Text Search**: Pagefind integration with modal interface
- **Tag System**: Extensive categorization with filtering
- **RSS Feeds**: Multi-language feeds for different content types
- **TOC**: Dynamic table of contents with scroll tracking

## Content Schema

### Post Frontmatter
```yaml
title: string              # Post title
description: string        # SEO description
publishDate: string        # ISO date string
tags: string[]            # Category tags
draft: boolean            # Publication status
language: "en" | "zh-TW"  # Content language
seriesId?: string         # Optional series reference
orderInSeries?: number    # Series position
coverImage?: {            # Optional cover image
  src: string
  alt: string
}
```

### Note Frontmatter
```yaml
title: string              # Note title
description?: string       # Optional description
publishDate: string        # ISO date string
language: "en" | "zh-TW"  # Content language
```

### Series Definition
```yaml
id: string                # Unique series identifier
title: string             # Series title
description: string       # Series description
featured?: boolean        # Featured status
```

## Development Workflow

### Commands
```bash
npm run dev          # Development server (port 4321)
npm run build        # Production build
npm run postbuild    # Generate search index
npm run preview      # Preview production build
npm run lint         # Biome linter
npm run format       # Code formatting
npm run check        # Astro type checking
```

### Content Creation
1. **CMS Interface**: Navigate to `/cms` for form-based editing
2. **Manual Files**: Create markdown files in appropriate `src/content/` directories
3. **API Integration**: Use `/api/cms` for programmatic content creation

### Image Handling
- **Upload Path**: CMS uploads to `src/content/post/[slug]/`
- **Optimization**: Sharp-based processing with automatic format conversion
- **Responsive**: Astro's built-in image optimization

## Component Architecture

### Layout Components
- `Header.astro`: Navigation with language switching
- `Footer.astro`: Site footer with translations
- `BaseHead.astro`: SEO meta tags and social media

### Content Components
- `PostPreview.astro`: Blog post cards with metadata
- `TOC.astro`: Table of contents with scroll tracking
- `Masthead.astro`: Post header with publication info
- `SeriesPanel.astro`: Series navigation

### Utility Components
- `Search.astro`: Full-text search modal (triggered by `/` key)
- `ThemeToggle.astro`: Dark/light mode switcher
- `LanguageToggle.astro`: Language switching dropdown
- `Paginator.astro`: Pagination navigation

## State Management

### Theme System
- CSS custom properties for color management
- System preference detection with manual override
- Persistent localStorage state

### Language Detection
- URL-based language detection (`/en/`, `/zh-TW/`)
- Automatic content filtering by language
- Language-aware navigation and routing

## Performance Optimizations

### Build Process
1. **Static Generation**: All pages pre-rendered at build time
2. **Search Indexing**: Pagefind generates client-side search database
3. **Asset Optimization**: Images, fonts, and CSS optimized
4. **Code Splitting**: Minimal JavaScript with progressive enhancement

### Caching Strategy
- **Static Assets**: Long-term caching for images and fonts
- **Search Index**: Lazy-loaded Pagefind integration
- **Font Loading**: Local fonts with `display: swap`

## SEO & Social Features

### Meta Tags
- Automatic Open Graph image generation using Satori
- Language-specific meta tags and structured data
- Canonical URLs with proper language annotations

### Social Integration
- Webmentions support for comments and interactions
- Share buttons with platform-specific formatting
- RSS feeds for content syndication

## Security Considerations

### Content Security
- External links use `nofollow` and `noreferrer`
- Image uploads validated and processed server-side
- No client-side script injection in markdown content

### API Security
- Form validation on CMS endpoints
- File type restrictions for uploads
- Error handling without information disclosure

## Deployment Configuration

### Build Requirements
- Node.js 18+
- Sharp for image processing
- Pagefind for search indexing

### Environment Variables
```bash
WEBMENTION_API_KEY=      # Optional webmentions integration
WEBMENTION_URL=          # Site URL for webmentions
WEBMENTION_PINGBACK=     # Webmention endpoint
```

### Platform Compatibility
- **Netlify**: Native adapter with edge functions
- **Vercel**: Compatible with minimal configuration
- **Static Hosts**: Full static generation support

## Content Strategy

### Current Content
- 39+ blog posts covering AI, blockchain, and technology
- 2 content series with organized navigation
- Extensive tag system (80+ unique tags)
- Bilingual content with English primary focus

### Content Organization
- **Series-based**: Related posts grouped for better navigation
- **Tag-driven**: Extensive categorization for discoverability
- **Time-based**: Year-based grouping for historical context
- **Language-specific**: Separate content streams for different audiences

## Maintenance Tasks

### Regular Updates
- Content freshness through CMS or direct file editing
- Search index regeneration after content changes
- Image optimization for new uploads
- Tag management and cleanup

### Performance Monitoring
- Build time optimization
- Asset size monitoring
- Search index size management
- Core Web Vitals tracking

## Future Enhancements

### Planned Features
- Enhanced multilingual content management
- Advanced search filtering and faceting
- Comment system integration
- Newsletter subscription functionality
- Enhanced analytics and content insights

### Technical Improvements
- Automated image optimization pipeline
- Advanced caching strategies
- Progressive Web App enhancements
- Enhanced accessibility features

## Configuration Files

### Key Configuration
- `astro.config.ts`: Main framework configuration
- `tailwind.config.ts`: Styling and design tokens
- `src/site.config.ts`: Site metadata and navigation
- `src/content.config.ts`: Content collection schemas

This documentation provides comprehensive context for AI assistants working with the Blockspace codebase, covering architecture, features, development workflow, and maintenance considerations.