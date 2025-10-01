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

	// Filter posts based on language folder structure
	return allPosts.filter(post => {
		const pathSegments = post.id.split('/');
		const postLanguage = pathSegments[0];

		// Normalize language codes for comparison (Astro converts zh-TW to zh-tw)
		const normalizeLanguage = (lang: string) => lang.toLowerCase();
		const supportedLanguages = ['en', 'zh-tw'];
		const normalizedPostLanguage = normalizeLanguage(postLanguage);
		const normalizedTargetLanguage = normalizeLanguage(language);

		// If no language folder or unsupported language, assume English
		if (pathSegments.length === 1 || !supportedLanguages.includes(normalizedPostLanguage)) {
			return normalizedTargetLanguage === 'en';
		}

		return normalizedPostLanguage === normalizedTargetLanguage;
	});
}

/** get notes filtered by language */
export async function getNotesByLanguage(language: string): Promise<CollectionEntry<"note">[]> {
	const allNotes = await getCollection("note");
	
	// Filter notes based on language folder structure
	return allNotes.filter(note => {
		const pathSegments = note.id.split('/');
		const noteLanguage = pathSegments[0];
		
		// Normalize language codes for comparison (Astro converts zh-TW to zh-tw)
		const normalizeLanguage = (lang: string) => lang.toLowerCase();
		const supportedLanguages = ['en', 'zh-tw'];
		const normalizedNoteLanguage = normalizeLanguage(noteLanguage);
		const normalizedTargetLanguage = normalizeLanguage(language);
		
		// If no language folder or unsupported language, assume English
		if (pathSegments.length === 1 || !supportedLanguages.includes(normalizedNoteLanguage)) {
			return normalizedTargetLanguage === 'en';
		}
		
		return normalizedNoteLanguage === normalizedTargetLanguage;
	});
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
