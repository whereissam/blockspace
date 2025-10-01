---
title: "The Evolution and Opportunities in AI Coding: From Copilot to Agent"
description: "An in-depth analysis of the AI coding landscape, exploring the development from GitHub Copilot to autonomous programming agents, model limitations, the strategic value of user context, and emerging trends like Vibe Coding that are reshaping software development."
publishDate: "2025-05-09"
tags: ["AI", "AI coding", "Cursor", "Devin", "podcast"]
---

# The Evolution and Opportunities in AI Coding

## The Rise and Evolution of AI Coding

In the past two years, the AI coding sector has experienced explosive growth. From Microsoft's GitHub Copilot continuing to increase revenue, to Cursor's emergence in 2024 and rapid climb to a $10 billion valuation, followed by OpenAI's announcement of plans to acquire Silicon Valley AI coding startup Windsurf for $3 billion, and Apple partnering with Anthropic to jointly develop an AI programming platform. While AI applications in many domains remain exploratory, AI coding has already achieved consensus and product-market fit (PMF).

### From Pair Programming to AI Assistance

The true origin of AI coding can be traced back to 2021. Before then, the software development process often utilized "pair programming," where two programmers work on the same computer: one serves as the "driver" writing code and focusing on implementation details, while the other acts as the "navigator" observing the code, thinking about the overall direction, and offering suggestions. Companies like Tabnine had attempted to implement this collaboration using machine learning prior to 2021, but with limited model capabilities, the results were unsatisfactory.

In 2021, Microsoft collaborated with OpenAI to launch GitHub Copilot, further developing this concept by making AI the partner in pair programming. It initially focused on code completion functionality, but with the limitations of the GPT-3 model, its usage remained relatively narrow.

### The Critical Moment of Large Model Breakthroughs

The real breakthrough occurred in 2023, especially after the release of GPT-3.5. With enhanced capabilities of large language models, AI coding tools could complete more difficult and complex code completion and generation tasks. This technological advancement drove the development of in-depth Copilot features in products like Cursor, Tree, and Windsurf.

AI coding has developed along two paths: one represented by GitHub Copilot, Cursor, Windsurf, and Tree, adopting a human-led, AI-assisted model; the other represented by Devin, aiming for AI to independently complete entire programming tasks. Currently, Copilot-type products have entered the practical stage with scaled users and revenue, while Agent-type products are still in exploration.

### AI Automation Levels

Following the approach of autonomous driving levels, AI coding can also be classified into five levels from L1 to L5, reflecting different degrees of automation. Web development tools like Locofy, V0, and Replit have reached close to L4 level of automation, capable of automatically completing most web development tasks. Meanwhile, general tools like GitHub Copilot, Cursor, and Windsurf have relatively lower automation levels, still requiring significant human involvement. Devin aims to achieve L4 level, becoming an all-capable AI engineer not limited to specific tasks, but realizing this goal still faces numerous challenges.

## Model Bottlenecks and Context Limitations

Why hasn't the once-popular Devin truly become practical yet? The core issues lie in the model's context length limitations and insufficient ability to understand complex systems.

### The "Brain Capacity" Limitation

Current model context lengths (such as Cursor's 200,000 tokens) cannot accommodate the entire codebase of large software. Taking Google Chrome as an example, its browser code contains approximately 3 million lines; if each line of code averages 10 tokens, it completely exceeds the processing capacity of the model. The model simply cannot "see" the complete codebase, making it difficult to understand the global architecture and perform system design.

More complex distributed systems like Facebook or Netflix have even more code, up to hundreds of millions of lines, far exceeding the current "brain capacity" of models. This is not just a quantity issue but also involves understanding the complex relationships between code components, akin to comprehending all books in a library and their intrinsic connections.

### The Challenge of Expressing Complex Requirements

Beyond the limitations of the model itself, humans' ability to express complex requirements is another major obstacle. For example, asking AI to "write a TikTok app" is an extremely complex request that even humans struggle to fully articulate. It might involve numerous product documents, design specifications, and business logic that need to be correctly understood and integrated to produce effective code.

Given these limitations, products like Devin, which aim to be "all-capable" AI software engineers, can currently only handle simple or medium-scale code, such as relatively simple games like Tetris or Snake. For genuine commercial-grade applications, these tools remain far from practical.

## Context: The Moat of AI Coding

The core competitive advantage of AI coding tools lies in their ability to acquire and utilize user context, which is becoming the key moat in this field.

### The Strategic Value of User Data

This context includes individual users' habits, backgrounds, and preferences, as well as enterprises' codebases, industry knowledge, and internal documents. When users interact with AI coding tools, they are continuously annotating data for themselves – every request, modification, and feedback is valuable annotation data.

This data is extremely valuable to AI service providers because it cannot be found on the internet and can only be collected through user interactions with products. With the development of protocols like MCP (Machine Cognition Protocol) and agent-to-agent, in theory, a user's context in one application can be cross-called by other applications, further expanding the value of the data.

### The Deep Logic of Free Strategies

"Those who own context rule the world" might explain why some AI coding tools adopt free strategies – their goal may not just be immediate commercial returns, but rather acquiring user context data. This is somewhat similar to the early promotion strategies of products like TikTok: first offering free access to gain users, cultivate usage habits, accumulate data assets, and then consider commercialization.

As one investor noted: "Data on the internet has been largely utilized, but user context – the source of human needs – remains an underutilized data goldmine." This data might be stored in forms like KV cache and become a unique resource for improving AI models.

### Barriers to Enterprise Adoption

However, this also raises concerns about privacy and data protection, especially for enterprise users. Large enterprises may be unwilling to share their sensitive codebases and intellectual property, which might require solutions through privacy computing or federated learning technologies.

Currently, small teams and individual developers are the most receptive group for these tools, while large enterprises have two options: either adopt customized solutions after establishing certain privacy and security infrastructure (like Windsurf's approach), or develop internal tools to ensure data doesn't leave the company. For example, tech giants like Google and Meta already have their own Copilot tools for internal development.

## The True Audience for AI Coding

The audience for AI coding is expanding, but the idea of coding for complete beginners might be a false premise. Let's analyze what types of users are most likely to benefit from these tools.

### To P (To Professional) Market

The most mature market currently is "To P" (To Professional) – professional users. This includes two groups:

1. **Professional Developers**: Programmers who are already engaged in coding work and can significantly increase efficiency using AI coding tools.

2. **Professional Non-Programmers**: Such as product managers, designers, or "programmers who haven't coded in twenty years." They have sufficient technical understanding to guide AI in generating effective code but may lack the ability or time to write complex programs themselves.

Both user types have clear willingness to pay, as AI tools can save them time or extend their capability range.

### The Rise of Citizen Developers

There are approximately 50 million programmers globally, but adding the broader developer community, potential users could reach hundreds of millions. The number of "citizen developers" or hobby developers is projected to be four times that of professional developers by 2025. This trend reflects how programming is transitioning from a skill of a few professionals to a basic capability for a wider population.

A product manager shared: "To quickly launch a feature, I directly paid to use V0 to build the frontend, without needing to wait for a frontend engineer's time." Such cases are becoming increasingly common, indicating that AI tools are changing traditional development workflows and role divisions.

### The Real Needs of Beginners

However, true programming "beginners" may lack both the need and ability to use these tools. One CEO's perspective is: "Beginners even find talking to programmers troublesome; they just want to try something out – if it works, great; if not, they move on."

Beginners are better suited for simplified tools similar to Office suites, or low-code/no-code platforms enhanced by AI, such as Canvas or Artifact. These tools are essentially office tools rather than programming environments, focusing on simplifying operations rather than providing complete development capabilities.

## Vibe Coding: A New Programming Paradigm?

"Vibe Coding" is a concept proposed by OpenAI's Andrew Karpathy in February 2024, referring to programming using natural language rather than traditional code. This concept has sparked profound thinking about the future of programming.

### Natural Language as the Ultimate Programming Language

Programming languages have always evolved toward higher levels of abstraction – from machine code to assembly language, to C, and then to higher-level languages like Python and TypeScript. Each evolutionary step means a higher level of abstraction and reduced control over the underlying details, but gains in development efficiency.

Karpathy believes the best programming language might ultimately be natural language. Its advantage lies in being universally applicable, more abstract, and highly efficient in expression. For example, asking AI to "write a TikTok-like app" is a natural expression, while precisely describing this requirement in Python would be extremely complex.

### "Rewrite" Rather Than "Debug"

Another transformation brought by Vibe Coding is the change in problem-solving approaches. In traditional programming, encountering a bug requires line-by-line debugging, while in the Vibe Coding paradigm, developers often choose to directly ask AI to rewrite the code.

As one YC incubator founder said: "If there's a bug, I don't debug it; I just skip it and ask AI to rewrite a solution." Since AI makes rewriting extremely efficient, this approach may be more economical than traditional debugging.

### Challenges and Limitations

However, Vibe Coding still faces numerous challenges:

1. **Uncertainty**: Each rewrite generates code that is not identical, potentially solving one problem but introducing others, similar to using Diffusion models to generate images where modifying certain details might reduce quality in other areas.

2. **Technical Knowledge Requirements**: Successfully using this method still requires a technical background. As one user experienced with Tree: AI might suggest using a specific framework, but when encountering version compatibility issues, an experienced developer is needed to decide whether to continue fixing or switch frameworks.

3. **Team Collaboration**: In a team development environment, it's not possible to rewrite code every time a bug is encountered, which poses challenges for version control and collaborative workflows.

Although Vibe Coding points to a future direction, practical application may still take time. In the next five years, it might be suitable for small to medium-scale software development, but complex applications will still require human experts to provide guidance and help AI learn and improve.

## Non-Consensus Innovation: Cursor's Challenge to Microsoft

Why could the startup Cursor emerge successfully despite GitHub Copilot's existing presence? The key lies in non-consensus innovation strategies, providing valuable insights for other startups.

### The Courage to Reconstruct IDE

Copilot exists as a plugin for VS Code, following the typical approach of large companies – extending AI capabilities as an addition to existing products. Cursor, however, chose a more difficult path: building an AI-native IDE environment from the ground up.

This decision was extremely challenging – VS Code has 500,000 lines of code, with complex structure and high density, written in TypeScript. Most startups would avoid such a massive engineering project, but Cursor bravely took on the challenge, making thorough modifications based on VS Code's open-source code.

### The Advantage of Context Integration

Cursor's real breakthrough lies in its complete control over context. By mastering the entire editing environment, Cursor can deeply integrate AI functionality, providing a one-stop experience. For example, when code errors occur, Cursor automatically collects relevant files and error information, packages them as context to send to the backend AI model, and then provides direct solutions.

One user shared their experience fixing a VS Code configuration issue: "I described the problem in Cursor, it automatically collected relevant information, and after dozens of interactions, it finally solved a problem I couldn't fix using traditional methods." This seamless integration of context handling makes Cursor a true efficiency tool, not just a code completion assistant.

### Devin's Non-Consensus Adventure

Devin is similarly a non-consensus innovation – positioning itself as a fully autonomous software engineer, aiming for what seems like an unattainable ultimate goal. Although current technology is insufficient to realize its vision, this forward-looking positioning has won it attention and funding, preparing it for market leadership when technology breakthroughs occur.

This non-consensus path is precisely the advantage of startups: large companies are unwilling to try due to existing business concerns and risk aversion tendencies, while startups are willing to take risks and potentially gain first-mover advantages after technological breakthroughs. As one investor said: "Startups should seek original non-consensus positioning, bet on a technological path, and if they succeed, they'll be the first to achieve PMF."

## Market Landscape and Endgame of AI Coding

Will the AI coding market see a winner-takes-all scenario? The business models and market differentiation trends in this track deserve in-depth discussion.

### The Inevitability of Diverse Landscapes

Currently, a multi-player coexistence scenario seems more likely. The traditional IDE market is already diverse – XCode for iOS development, JetBrains' GoLand and PyCharm for specific languages, and VS Code focused on other areas. Different development scenarios and language requirements determine the value of different tools.

From a market positioning perspective, AI coding products follow several routes:

1. **General Tools for Individuals or Small Teams**: Like Cursor, mainly targeting independent developers and small teams

2. **Secure Solutions for Enterprises**: Like Windsurf, emphasizing data security and enterprise-level integration

3. **Vertical Tools for Specific Programming Tasks**: Focusing on particular aspects like code review, unit testing, etc.

4. **Full-Stack Generation Tools for Web Development**: Like V0, concentrating on the entire process from design to frontend implementation

### Differences Between Chinese and American Markets

Comparing the Chinese and American markets, the American startup environment is relatively more friendly: financing is easier, customer acquisition barriers are lower, and large companies make decisions more slowly. A friend returning from the US shared: "For AI applications in the US, financing is easy, and finding the first batch of customers isn't difficult. Once you find a few customers, you can survive, and large companies respond slowly and are even willing to acquire promising startups."

In contrast, the Chinese market often follows successful American cases, with fewer original breakthroughs. This is partly due to the time lag in innovation – AI applications mature earlier in the US, and Chinese startups and large companies simultaneously see successful cases, causing startups to lose the opportunity to discover PMF first.

However, just as in the mobile internet era, China may eventually develop unique innovations and business models in the AI application field, especially in ToC applications where China has always had distinct advantages. "In the previous era, the last successful American ToC product might have been Instagram, while Chinese ToC product managers' capabilities are unbeatable."

### Unknown Variables and Evolution Directions

The market endgame remains difficult to predict because multiple factors are rapidly changing:

1. **Programming Language Evolution**: Natural language may gradually become the mainstream programming method, changing the entire development process

2. **Model Capability Breakthroughs**: Increased context length and improved understanding may break current technical limitations

3. **Software Form Transformation**: Coexistence of code and neural networks as two implementation methods, with gradually blurring boundaries

4. **Development Subject Changes**: Accelerating transition from human-led to human-machine collaboration, and then to AI-led approaches

## Future Outlook

The AI coding field is in a stage of rapid development. While the endgame is difficult to predict, opportunities abound.

### Stepwise Climbing Strategy

A fully autonomous AI Engineer is not an unattainable vision, just as self-driving cars are already on the streets of San Francisco, technological development often exceeds expectations. However, realizing this vision requires a "stepwise climbing" strategy – we cannot reach the summit in one step but can approach the goal by building intermediate steps.

This strategy is also known as "laying eggs along the way" – not only aiming for lofty goals but also designing intermediate product forms that can sustain the team and accumulate experience and data. Each step of progress brings actual value, building the foundation for the ultimate vision.

### New Areas of Entrepreneurial Opportunities

Startups should seek non-consensus opportunities, avoiding tracks where consensus already exists. Specific directions include:

1. **Predicting Next-Generation Model Capabilities**: Assuming future models overcome current limitations, designing corresponding application scenarios

2. **Delving into Vertical Domains**: Focusing on AI programming solutions for specific industries or tasks

3. **Innovation in the Agent Direction**: Developing intelligent agents for specific tasks, such as AI assistants focused on code review or unit testing

4. **Ecosystem Around AI Engineers**: Developing tools and platforms for managing, monitoring, and evaluating AI-generated code

5. **Seeking Original Opportunities Internationally**: Exploring original positioning in international markets, then considering bringing successful models back to domestic markets

### Ultimate Vision and Evolutionary Path

The ultimate vision for AI coding is to achieve deep collaboration between AI and humans, or even have AI lead the development process in certain domains. This transformation will fundamentally change how software is developed, potentially like autonomous driving, evolving from complete human control to assisted driving, and finally to fully autonomous driving.

As one practitioner in San Francisco notes: "A few years ago, no one believed there would be self-driving cars on the roads, but now there are numerous Waymo vehicles on San Francisco streets. Similarly, a fully automated AI engineer is no longer just imagination."

In this evolutionary process, the human role will gradually shift from writing code to reviewing code, providing guidance, and making high-level decisions. AI will handle more details and tedious work, allowing humans to focus on creativity and strategic thinking, forming a new human-machine collaborative development model.