# SEO/GEO TODO

## ~~FAQPage Schema Component~~ DONE

Component created at `src/components/blog/FAQ.astro`.

- [x] Accepts `{ question, answer }[]` via `items` prop
- [x] Renders semantic `<dl>` with visible Q&A
- [x] Injects `FAQPage` JSON-LD structured data
- [ ] Add FAQ sections to high-traffic blog posts (start with top 5 by traffic)

---

## Search Engine Indexing Submissions

Submit sitemap to AI-adjacent search engines to ensure content gets crawled and cited.

### Brave Search (used by Claude AI)
- Go to: https://search.brave.com/webmasters
- Submit sitemap: `https://blockspaces.xyz/sitemap-index.xml`
- Verify domain ownership

### Bing Webmaster Tools (used by Microsoft Copilot)
- Go to: https://www.bing.com/webmasters
- Submit sitemap: `https://blockspaces.xyz/sitemap-index.xml`
- Verify domain ownership
- Bing indexing is required for Copilot citations

### Google Search Console (if not already done)
- Verify `https://blockspaces.xyz/sitemap-index.xml` is submitted
- Check for indexing issues in Coverage report
