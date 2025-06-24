import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site.config";
import rss from "@astrojs/rss";

export const GET = async () => {
	const posts = await getAllPosts();

	return rss({
		title: siteConfig.title + " - 繁體中文",
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.publishDate,
			link: `zh-TW/posts/${post.id}/`,
		})),
	});
};