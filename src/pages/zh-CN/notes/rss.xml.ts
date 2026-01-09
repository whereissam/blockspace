import rss from "@astrojs/rss";
import { getNotesByLanguage } from "@/data/post";
import { siteConfig } from "@/site.config";

export const GET = async () => {
	const notes = await getNotesByLanguage("zh");

	return rss({
		title: `${siteConfig.title} - 筆記`,
		description: siteConfig.description,
		site: import.meta.env.SITE,
		items: notes.map((note) => ({
			title: note.data.title,
			description: note.data.description || "",
			pubDate: note.data.publishDate,
			link: `zh/notes/${note.id}/`,
		})),
	});
};
