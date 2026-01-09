export interface PostData {
	title: string;
	description: string;
	tags: string[];
	coverImage?:
		| {
				src: string;
				alt: string;
		  }
		| undefined;
	seriesId?: string | undefined;
	content: string;
	draft?: boolean;
}

export interface CoverImageData {
	src: string;
	alt: string;
	file: File;
}

export function generateSlug(title: string): string {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.trim();
}

export function generateMarkdownFile(data: PostData): string {
	const now = new Date();
	const publishDate = now.toLocaleDateString("en-US", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});

	let frontmatter = `---
title: "${data.title}"
description: "${data.description}"
publishDate: "${publishDate}"`;

	if (data.coverImage) {
		frontmatter += `
coverImage:
  src: "${data.coverImage.src}"
  alt: "${data.coverImage.alt}"`;
	}

	if (data.tags.length > 0) {
		frontmatter += `
tags: [${data.tags.map((tag) => `"${tag}"`).join(", ")}]`;
	}

	if (data.seriesId) {
		frontmatter += `
seriesId: "${data.seriesId}"`;
	}

	frontmatter += `
draft: ${data.draft ? "true" : "false"}
---

`;

	return frontmatter + data.content;
}

export async function saveFile(
	slug: string,
	markdownContent: string,
	coverImageData?: CoverImageData,
): Promise<string[]> {
	const results: string[] = [];

	try {
		// Create post directory
		const postDir = `/Users/huangbozhang/Desktop/project/blockspace/src/content/post/${slug}`;

		// Save markdown file
		const markdownPath = `${postDir}/index.md`;
		await writeToFile(markdownPath, markdownContent);
		results.push(`✅ ${markdownPath}`);

		// Save cover image if provided
		if (coverImageData) {
			const imagePath = `${postDir}/cover.jpg`;
			await writeImageToFile(imagePath, coverImageData.file);
			results.push(`✅ ${imagePath}`);
		}

		return results;
	} catch (error) {
		console.error("Error saving files:", error);
		throw new Error(
			`Failed to save files: ${error instanceof Error ? error.message : "Unknown error"}`,
		);
	}
}

async function writeToFile(path: string, content: string): Promise<void> {
	// For browser environment, we'll use a different approach
	// This is a placeholder - in a real implementation, you'd need a backend API

	// Create a blob and download it
	const blob = new Blob([content], { type: "text/markdown" });
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = path.split("/").pop() || "post.md";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

async function writeImageToFile(_path: string, file: File): Promise<void> {
	// For browser environment, we'll download the image
	const url = URL.createObjectURL(file);
	const a = document.createElement("a");
	a.href = url;
	a.download = "cover.jpg";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	URL.revokeObjectURL(url);
}

// Alternative approach: Generate files for manual copying
export function generateFilesForDownload(
	slug: string,
	markdownContent: string,
	coverImageData?: CoverImageData,
): { markdownFile: Blob; imageFile?: File | undefined; instructions: string } {
	const markdownFile = new Blob([markdownContent], { type: "text/markdown" });

	const instructions = `
Manual Setup Instructions:
1. Create directory: src/content/post/${slug}/
2. Save the markdown file as: src/content/post/${slug}/index.md
${coverImageData ? `3. Save the image file as: src/content/post/${slug}/cover.jpg` : ""}
4. Run your dev server to see the new post

Post URL will be: /posts/${slug}/
`;

	return {
		markdownFile,
		imageFile: coverImageData?.file,
		instructions,
	};
}
