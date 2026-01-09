// AI Chatbot Configuration
export const chatbotConfig = {
	// RAG API endpoint - adjust this to your deployed API URL
	apiUrl: import.meta.env.PUBLIC_RAG_API_URL || "http://localhost:8000",

	// Default search type when chatbot opens
	defaultSearchType: "blog" as "blog" | "chat" | "code",

	// Maximum message length
	maxMessageLength: 500,

	// Number of sources to retrieve per query
	defaultTopK: 5,

	// Keyboard shortcut to open chatbot (Ctrl/Cmd + K)
	keyboardShortcut: {
		key: "k",
		ctrlKey: true,
		metaKey: true,
	},
};
