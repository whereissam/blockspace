import { type CollectionEntry, getCollection } from "astro:content";

/** filter out draft posts based on the environment */
export async function getAllPosts(): Promise<CollectionEntry<"post">[]> {
	return await getCollection("post", ({ data }) => {
		return import.meta.env.PROD ? !data.draft : true;
	});
}

/** get posts filtered by language */
export async function getPostsByLanguage(language: string): Promise<CollectionEntry<"post">[]> {
	const allPosts = await getAllPosts();
	
	// For now, only show English posts for English routes, empty for Chinese
	if (language === 'en') {
		return allPosts;
	} else if (language === 'zh-TW') {
		// Return empty array until Chinese translations are available
		return allPosts.filter(post => post.data.language === 'zh-TW');
	}
	
	return allPosts;
}

/** get notes filtered by language */
export async function getNotesByLanguage(language: string): Promise<CollectionEntry<"note">[]> {
	const allNotes = await getCollection("note");
	
	// For now, only show English notes for English routes, empty for Chinese
	if (language === 'en') {
		return allNotes;
	} else if (language === 'zh-TW') {
		// Return empty array until Chinese translations are available
		return allNotes.filter(note => note.data.language === 'zh-TW');
	}
	
	return allNotes;
}

/** groups posts by year (based on option siteConfig.sortPostsByUpdatedDate), using the year as the key
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 */
export function groupPostsByYear(posts: CollectionEntry<"post">[]) {
	return posts.reduce<Record<string, CollectionEntry<"post">[]>>((acc, post) => {
		const year = post.data.publishDate.getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year]?.push(post);
		return acc;
	}, {});
}

/** returns all tags created from posts (inc duplicate tags)
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getAllTags(posts: CollectionEntry<"post">[]) {
	return posts.flatMap((post) => [...post.data.tags]);
}

/** returns all unique tags created from posts
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTags(posts: CollectionEntry<"post">[]) {
	return [...new Set(getAllTags(posts))];
}

/** returns a count of each unique tag - [[tagName, count], ...]
 *  Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so.
 *  */
export function getUniqueTagsWithCount(posts: CollectionEntry<"post">[]): [string, number][] {
	return [
		...getAllTags(posts).reduce(
			(acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
			new Map<string, number>(),
		),
	].sort((a, b) => b[1] - a[1]);
}
