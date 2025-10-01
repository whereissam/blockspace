import type { APIRoute } from 'astro';
import { getCollection } from "astro:content";
import { extractPlainText } from "@/utils/extractText";

export const GET: APIRoute = async () => {
  try {
    // Get all posts and notes for search
    const posts = await getCollection("post");
    const notes = await getCollection("note");

    // Prepare search data with limited content for performance
    const searchData = [
      ...posts.map((post) => ({
        id: post.id,
        title: post.data.title,
        description: post.data.description,
        content: (post.data.description || '').slice(0, 200), // Use description instead of body for now
        url: `/posts/${post.id}`,
        type: "post",
        tags: post.data.tags || [],
      })),
      ...notes.map((note) => ({
        id: note.id,
        title: note.data.title,
        description: note.data.description || "",
        content: (note.data.description || '').slice(0, 200), // Use description instead of body for now
        url: `/notes/${note.id}`,
        type: "note",
        tags: [],
      }))
    ];

    return new Response(JSON.stringify(searchData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating search data:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate search data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};