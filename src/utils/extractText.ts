export function extractPlainText(markdown: string): string {
	// Simple regex-based approach for extracting plain text from markdown
	// This avoids the complexity of unified processing at build time
	return (
		markdown
			// Remove code blocks
			.replace(/```[\s\S]*?```/g, "")
			// Remove inline code
			.replace(/`([^`]+)`/g, "$1")
			// Remove links but keep text
			.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
			// Remove images
			.replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
			// Remove headers
			.replace(/#{1,6}\s+/g, "")
			// Remove bold/italic
			.replace(/\*\*([^*]+)\*\*/g, "$1")
			.replace(/\*([^*]+)\*/g, "$1")
			.replace(/__([^_]+)__/g, "$1")
			.replace(/_([^_]+)_/g, "$1")
			// Remove horizontal rules
			.replace(/^---$/gm, "")
			// Remove list markers
			.replace(/^\s*[-*+]\s+/gm, "")
			.replace(/^\s*\d+\.\s+/gm, "")
			// Remove blockquotes
			.replace(/^\s*>\s+/gm, "")
			// Remove extra whitespace
			.replace(/\n\s*\n/g, "\n")
			.replace(/^\s+|\s+$/g, "")
			.trim()
	);
}
