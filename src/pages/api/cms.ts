import { getCollection } from "astro:content";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import type { APIRoute } from "astro";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	try {
		const formData = await request.formData();

		const title = formData.get("title") as string;
		const description = formData.get("description") as string;
		const content = formData.get("content") as string;
		const tags = formData.get("tags") as string;
		const seriesId = formData.get("seriesId") as string;
		const coverImageAlt = formData.get("coverImageAlt") as string;
		const coverImage = formData.get("coverImage") as File;
		const draft = formData.get("draft") as string;

		if (!title || !description || !content) {
			return new Response(JSON.stringify({ error: "Missing required fields" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		// Validate series ID if provided
		if (seriesId) {
			try {
				const existingSeries = await getCollection("series");
				const seriesExists = existingSeries.some((s) => s.id === seriesId);

				if (!seriesExists) {
					return new Response(
						JSON.stringify({
							error: `Series with ID '${seriesId}' does not exist. Please create the series first or leave this field empty.`,
						}),
						{
							status: 400,
							headers: { "Content-Type": "application/json" },
						},
					);
				}
			} catch (error) {
				console.warn("Could not validate series:", error);
				// Continue without validation if series collection doesn't exist
			}
		}

		// Generate slug
		const slug = title
			.toLowerCase()
			.replace(/[^a-z0-9\s-]/g, "")
			.replace(/\s+/g, "-")
			.replace(/-+/g, "-")
			.trim();

		// Create post directory
		const postDir = join(__dirname, "../../content/post", slug);
		await mkdir(postDir, { recursive: true });

		// Process tags
		const tagsList = tags
			? tags
					.split(",")
					.map((tag) => tag.trim())
					.filter((tag) => tag)
			: [];

		// Generate frontmatter
		const now = new Date();
		const publishDate = now.toLocaleDateString("en-US", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		});

		let frontmatter = `---
title: "${title}"
description: "${description}"
publishDate: "${publishDate}"`;

		// Handle cover image
		let imageWritten = false;
		let imageExtension = "jpg";

		if (coverImage && coverImage.size > 0) {
			console.log("Processing image:", coverImage.name, "Size:", coverImage.size);

			const imageBuffer = await coverImage.arrayBuffer();
			imageExtension = coverImage.name.split(".").pop()?.toLowerCase() || "jpg";

			// Ensure valid image extension
			if (!["jpg", "jpeg", "png", "gif", "webp"].includes(imageExtension)) {
				imageExtension = "jpg";
			}

			// Always use jpg for consistency (Astro handles it better)
			imageExtension = "jpg";

			const imagePath = join(postDir, `cover.${imageExtension}`);

			await writeFile(imagePath, new Uint8Array(imageBuffer));
			imageWritten = true;

			console.log("Image written to:", imagePath);

			frontmatter += `
coverImage:
  src: "./cover.${imageExtension}"
  alt: "${coverImageAlt || title}"`;
		}

		if (tagsList.length > 0) {
			frontmatter += `
tags: [${tagsList.map((tag) => `"${tag}"`).join(", ")}]`;
		}

		if (seriesId) {
			frontmatter += `
seriesId: "${seriesId}"`;
		}

		frontmatter += `
draft: ${draft === "true" ? "true" : "false"}
---

`;

		// Write markdown file
		const markdownContent = frontmatter + content;
		const markdownPath = join(postDir, "index.md");
		await writeFile(markdownPath, markdownContent, "utf8");

		const results = [`Created: ${markdownPath}`];
		if (imageWritten) {
			results.push(`Created: ${join(postDir, `cover.${imageExtension}`)}`);
		}

		return new Response(
			JSON.stringify({
				success: true,
				slug,
				files: results,
				url: `/posts/${slug}/`,
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		);
	} catch (error) {
		console.error("CMS API Error:", error);
		return new Response(
			JSON.stringify({
				error: "Failed to create post",
				details: error instanceof Error ? error.message : "Unknown error",
			}),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
};
