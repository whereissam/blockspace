import { getNotesByLanguage } from "@/data/post";
import { siteConfig } from "@/site.config";
import rss from "@astrojs/rss";

export const GET = async () => {
	const notes = await getNotesByLanguage('zh-TW');

	return rss({
		title: siteConfig.title + " - 筆記",
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: notes.map((note) => ({
			title: note.data.title,
			description: note.data.description || "",
			pubDate: note.data.publishDate,
			link: `zh-TW/notes/${note.id}/`,
		})),
	});
};