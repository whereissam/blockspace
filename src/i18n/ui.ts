export type Locale = "en" | "zh-TW" | "zh-CN";

export const ui: Record<Locale, {
	// Home page
	homeTitle: string;
	homeDescription: string;
	homeSrTitle: string;
	latestLabel: string;
	viewAllPosts: string;
	notesLabel: string;
	emptyMessage?: string;
	emptySubMessage?: string;
	// Posts page
	postsTitle: string;
	postsDescription: string;
	tagsTitle: string;
	viewAllTags: string;
	emptyPostsTitle?: string;
	emptyPostsSubtitle?: string;
	emptyPostsDetail?: string;
	// Tags index
	allTagsTitle: string;
	allTagsDescription: string;
	noTagsTitle: string;
	noTagsSubtitle: string;
	postsCount: string;
	viewAllTagsAriaLabel: (tag: string) => string;
	// Tag filtered
	tagMetaDescription: (tag: string) => string;
	tagMetaTitle: (tag: string) => string;
	tagHeading: string;
	prevTagsLabel: string;
	nextTagsLabel: string;
	postListAriaLabel: string;
	// Notes page
	notesPageTitle: string;
	notesDescription: string;
	prevPage: string;
	nextPage: string;
	notesEmptyTitle?: string;
	notesEmptySubtitle?: string;
	notesEmptyDetail?: string;
}> = {
	en: {
		homeTitle: "Home",
		homeDescription: "Blockspace — Sam's blog exploring blockchain, AI, Web3, DeFi, and emerging technology with deep dives and practical insights",
		homeSrTitle: "Blockspace — Blockchain, AI & Web3 Insights by Sam",
		latestLabel: "Latest",
		viewAllPosts: "View all posts",
		notesLabel: "Notes",
		postsTitle: "Posts",
		postsDescription: "Read my collection of posts and the things that interest me",
		tagsTitle: "Tags",
		viewAllTags: "View all \u2192",
		allTagsTitle: "All Tags",
		allTagsDescription: "Browse all topics and tags covered in Blockspace articles",
		noTagsTitle: "No tags yet",
		noTagsSubtitle: "Tags will appear once posts are published",
		postsCount: "posts",
		viewAllTagsAriaLabel: (tag) => `View all posts tagged ${tag}`,
		tagMetaDescription: (tag) => `Browse all posts tagged with ${tag}`,
		tagMetaTitle: (tag) => `Tag: ${tag}`,
		tagHeading: "Tags",
		prevTagsLabel: "\u2190 Previous Tags",
		nextTagsLabel: "Next Tags \u2192",
		postListAriaLabel: "Blog post list",
		notesPageTitle: "Notes",
		notesDescription: "Read my collection of notes",
		prevPage: "\u2190 Previous Page",
		nextPage: "Next Page \u2192",
	},
	"zh-TW": {
		homeTitle: "首頁",
		homeDescription: "Blockspace — Sam 的部落格，探索區塊鏈、AI、Web3、DeFi 與新興科技的深度文章與實用見解",
		homeSrTitle: "Blockspace — 區塊鏈、AI 與 Web3 深度洞察",
		latestLabel: "最新文章",
		viewAllPosts: "查看所有文章",
		notesLabel: "筆記",
		emptyMessage: "繁體中文內容即將推出",
		emptySubMessage: "Traditional Chinese content coming soon",
		postsTitle: "文章",
		postsDescription: "閱讀我的文章集和我感興趣的事物",
		tagsTitle: "標籤",
		viewAllTags: "查看全部 \u2192",
		emptyPostsTitle: "繁體中文內容即將推出",
		emptyPostsSubtitle: "Traditional Chinese content coming soon",
		emptyPostsDetail: "目前所有內容都是英文，中文翻譯正在進行中",
		allTagsTitle: "所有標籤",
		allTagsDescription: "我在文章中寫過的所有主題列表",
		noTagsTitle: "暫無標籤",
		noTagsSubtitle: "繁體中文內容即將推出",
		postsCount: "篇文章",
		viewAllTagsAriaLabel: (tag) => `查看所有標籤為 ${tag} 的文章`,
		tagMetaDescription: (tag) => `查看所有標籤為 ${tag} 的文章`,
		tagMetaTitle: (tag) => `標籤: ${tag}`,
		tagHeading: "標籤",
		prevTagsLabel: "\u2190 上一頁標籤",
		nextTagsLabel: "下一頁標籤 \u2192",
		postListAriaLabel: "部落格文章列表",
		notesPageTitle: "筆記",
		notesDescription: "閱讀我的筆記集",
		prevPage: "\u2190 上一頁",
		nextPage: "下一頁 \u2192",
		notesEmptyTitle: "繁體中文筆記即將推出",
		notesEmptySubtitle: "Traditional Chinese notes coming soon",
		notesEmptyDetail: "目前所有筆記都是英文，中文翻譯正在進行中",
	},
	"zh-CN": {
		homeTitle: "首页",
		homeDescription: "Blockspace — Sam 的博客，探索区块链、AI、Web3、DeFi 与新兴科技的深度文章与实用见解",
		homeSrTitle: "Blockspace — 区块链、AI 与 Web3 深度洞察",
		latestLabel: "最新文章",
		viewAllPosts: "查看所有文章",
		notesLabel: "笔记",
		emptyMessage: "简体中文内容即将推出",
		emptySubMessage: "Simplified Chinese content coming soon",
		postsTitle: "文章",
		postsDescription: "阅读我的文章集和我感興趣的事物",
		tagsTitle: "标签",
		viewAllTags: "查看全部 \u2192",
		emptyPostsTitle: "简体中文内容即将推出",
		emptyPostsSubtitle: "Simplified Chinese content coming soon",
		emptyPostsDetail: "目前所有内容都是英文，中文翻译正在进行中",
		allTagsTitle: "所有标签",
		allTagsDescription: "我在文章中寫過的所有主題列表",
		noTagsTitle: "暂无标签",
		noTagsSubtitle: "简体中文内容即将推出",
		postsCount: "篇文章",
		viewAllTagsAriaLabel: (tag) => `查看所有标签為 ${tag} 的文章`,
		tagMetaDescription: (tag) => `查看所有标签為 ${tag} 的文章`,
		tagMetaTitle: (tag) => `标签: ${tag}`,
		tagHeading: "标签",
		prevTagsLabel: "\u2190 上一頁标签",
		nextTagsLabel: "下一頁标签 \u2192",
		postListAriaLabel: "博客文章列表",
		notesPageTitle: "笔记",
		notesDescription: "阅读我的笔记集",
		prevPage: "\u2190 上一頁",
		nextPage: "下一頁 \u2192",
		notesEmptyTitle: "简体中文笔记即将推出",
		notesEmptySubtitle: "Simplified Chinese notes coming soon",
		notesEmptyDetail: "目前所有笔记都是英文，中文翻译正在进行中",
	},
};
