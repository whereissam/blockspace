import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import type { APIContext } from "astro";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import SFProRoundedBold from "@/assets/fonts/SF-Pro-Rounded-Bold.latin.base.ttf";
import SFProRoundedMedium from "@/assets/fonts/SF-Pro-Rounded-Medium.latin.base.ttf";
import SFProRoundedRegular from "@/assets/fonts/SF-Pro-Rounded-Regular.latin.base.ttf";
import SFProRoundedSemibold from "@/assets/fonts/SF-Pro-Rounded-Semibold.latin.base.ttf";
import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site.config";
import { getFormattedDate } from "@/utils/date";

const ogOptions: SatoriOptions = {
	// debug: true,
	fonts: [
		{
			data: Buffer.from(SFProRoundedRegular),
			name: "SF Pro Rounded",
			style: "normal",
			weight: 400,
		},

		{
			data: Buffer.from(SFProRoundedMedium),
			name: "SF Pro Rounded",
			style: "normal",
			weight: 500,
		},
		{
			data: Buffer.from(SFProRoundedSemibold),
			name: "SF Pro Rounded",
			style: "normal",
			weight: 600,
		},
		{
			data: Buffer.from(SFProRoundedBold),
			name: "SF Pro Rounded",
			style: "normal",
			weight: 700,
		},
	],
	height: 630,
	width: 1200,
};

const markup = (title: string, pubDate: string, coverImageBase64: string) =>
	html` <div tw="flex w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] text-white">
    <!-- Background cover image with overlay -->
    <div tw="absolute inset-0 opacity-20">
      <img
        src="data:image/png;base64,${coverImageBase64}"
        tw="w-full h-full object-cover"
        alt=""
      />
    </div>
    
    <!-- Content overlay -->
    <div tw="flex flex-col w-full h-full relative z-10 bg-gradient-to-r from-black/60 to-transparent">
      <div tw="flex flex-col flex-1 w-full p-10 justify-center">
        <p tw="text-2xl mb-6 text-[#a0a0a0] font-medium">${pubDate}</p>
        <h1 tw="text-5xl font-bold leading-tight text-white mb-4">${title}</h1>
        <div tw="w-24 h-1 bg-[#2bbc8a] rounded-full"></div>
      </div>
      
      <div tw="flex items-end justify-between w-full p-10 border-t border-white/20">
        <div tw="flex items-center">
          <div tw="w-12 h-12 bg-[#2bbc8a] rounded-full flex items-center justify-center mr-4">
            <div tw="w-6 h-6 bg-white rounded-sm"></div>
          </div>
          <div tw="flex flex-col">
            <p tw="text-2xl font-bold text-white">${siteConfig.title}</p>
            <p tw="text-lg text-[#a0a0a0]">by ${siteConfig.author}</p>
          </div>
        </div>
        
        <div tw="flex items-center text-[#a0a0a0] text-lg">
          <div tw="w-2 h-2 bg-[#2bbc8a] rounded-full mr-2"></div>
          <span>blockspaces.xyz</span>
        </div>
      </div>
    </div>
  </div>`;

export const prerender = false;

export async function GET(context: APIContext) {
	try {
		// Get slug from params
		const { slug, ext } = context.params;

		// Find the post
		const posts = await getAllPosts();
		const post = posts.find((p) => p.id === slug);

		if (!post) {
			return new Response("Post not found", { status: 404 });
		}

		const { title, publishDate, updatedDate } = post.data;
		const pubDate = updatedDate ?? publishDate;

		const postDate = getFormattedDate(pubDate, {
			month: "long",
			weekday: "long",
		});

		// Load and convert cover image to base64
		const coverImagePath = join(process.cwd(), "public", "cover.png");
		const coverImageBuffer = await readFile(coverImagePath);
		const coverImageBase64 = coverImageBuffer.toString("base64");

		const svg = await satori(markup(title, postDate, coverImageBase64), ogOptions);

		// Check if user requests PNG
		if (ext === "png") {
			const png = new Resvg(svg).render().asPng();
			return new Response(new Uint8Array(png), {
				headers: {
					"Cache-Control": "public, max-age=31536000, immutable",
					"Content-Type": "image/png",
				},
			});
		}

		// Check if user requests SVG
		if (ext === "svg") {
			return new Response(svg, {
				headers: {
					"Cache-Control": "public, max-age=31536000",
					"Content-Type": "image/svg+xml; charset=utf-8",
				},
			});
		}

		// If request doesn't end with .png or .svg, return error
		return new Response("Unsupported format", { status: 400 });
	} catch (error) {
		console.error("OG Image generation error:", error);
		return new Response("Error generating image", { status: 500 });
	}
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return posts
		.filter(({ data }) => !data.ogImage)
		.flatMap((post) => {
			return [
				{
					params: { slug: post.id, ext: "png" },
					props: {
						pubDate: post.data.updatedDate ?? post.data.publishDate,
						title: post.data.title,
					},
				},
				{
					params: { slug: post.id, ext: "svg" },
					props: {
						pubDate: post.data.updatedDate ?? post.data.publishDate,
						title: post.data.title,
					},
				},
			];
		});
}
