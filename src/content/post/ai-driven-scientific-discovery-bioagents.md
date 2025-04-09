---
title: "BioAgents: How AI is Revolutionizing Scientific Research at Planetary Scale"
description: "An exploration of Bio Protocol's groundbreaking BioAgents initiative that combines AI, blockchain, and bioscience to create million-scale agent networks capable of accelerating scientific discovery through decentralized, autonomous systems."
publishDate: "2025-04-09"
tags: ["AI", "BioAgents", "BioDAOs" , "blockchain", "deSci", "Bio Protocol"]
---

In a presentation titled "[1 Million BioAgents: The Future of Science Runs on AI](https://youtu.be/y5jdGrw3IVw?si=rwhyA_E_bRWguZjP)" by Bio Protocol, a visionary concept was revealed about how AI can fundamentally transform the future of scientific research. The presentation explored an ambitious vision: creating a global scientific research network composed of a million-level AI agents.

## BioDAOs and Decentralized Science

[Bio Protocol](https://www.bio.xyz/)'s core philosophy is to accelerate scientific research through the creation of "BioDAOs" (Biological Decentralized Autonomous Organizations). DAOs are decentralized autonomous organizations built on blockchain technology, operating without a traditional central management layer, with decisions made collectively by community members. BioDAOs apply this concept to scientific research, creating tokenized research organizations focused on specific scientific domains.

Each BioDAO has its own research direction, potentially focusing on basic research or developing therapeutic products. Currently, there are approximately 12-13 BioDAOs in operation, each with its own review and funding processes, creating intellectual property and returning proceeds from IP sales to the BioDAO ecosystem. This model allows researchers to receive direct funding support while maintaining autonomy over their research direction.

## BioAgents: Autonomous Agents for Scientific Research

Scientific research typically involves multiple complex and independent steps—from literature review to experimental design, data analysis, and hypothesis generation. Traditionally, these steps all require direct involvement from scientists, creating bottlenecks in research speed. BioAgents are designed as a solution to this challenge.

BioAgents are AI agents specifically designed to perform particular research steps. Each agent focuses on a specific step in the scientific process, such as analyzing papers, building knowledge databases, or proposing new research ideas. When the work of these specialized agents is connected, they form a complete and efficient scientific research process.

What makes this approach unique is its scalability. Bio Protocol is pioneering the field of agent science, utilizing globally distributed computing resources (i.e., "planetary-scale computing capacity") to significantly increase the output of scientific thought. "Planetary-scale computing capacity" refers to a network of computing resources distributed worldwide that can simultaneously run thousands of AI agents, each executing a specific part of a scientific task.

Unlike traditional centralized research models, this distributed approach allows research to proceed simultaneously in multiple directions, greatly accelerating the pace of scientific discovery. Imagine that traditionally, a researcher might need weeks to read and understand dozens of papers, while now multiple AI agents can process hundreds of papers simultaneously in just a few hours. This ability to handle multiple tasks concurrently is unparalleled in traditional research methods.

These agents can perform various tasks, including:
- Converting scientific papers into structured knowledge graphs
- Analyzing existing literature and identifying knowledge gaps
- Generating new research hypotheses
- Designing experiments and analyzing results
- Eventually writing scientific papers

## Technical Architecture and Implementation

Bio Protocol's BioAgents ecosystem is built on three main repositories, all open-source, allowing developers to contribute:

1. **Plugin BioAgent**: This is the core component, built on version 2 of the Eliza framework. This [plugin](https://github.com/bio-xyz/plugin-bioagent) is designed for researchers and bioscientists, capable of extracting information from scientific papers and converting it into structured data. This processed scientific knowledge can be stored in special databases, such as Origin Trail's distributed knowledge platform.

2. **BioAgents**: This [repository](https://github.com/bio-xyz/BioAgents) contains AI agents that perform scientific tasks, particularly focusing on processing knowledge graphs and generating research hypotheses. Currently, the system has integrated a set of papers on longevity science as a foundation and plans to expand to other scientific domains involved in BioDAOs.

3. **CoreAgent**: This part focuses on the coordination needs of DAOs, helping manage the non-scientific aspects of the organization, such as community building, marketing, and fundraising.

The system's operation is very simple: when researchers upload scientific papers to a specific Google Drive folder, the system automatically processes these files. It reads and analyzes the content of the articles, organizing important scientific concepts and the relationships between them. In this way, knowledge that was originally scattered across different papers is integrated into a coherent knowledge network. The AI system then analyzes this knowledge network, identifying potential research gaps or proposing new research questions, providing scientists with possible research directions.

It's worth mentioning that the system also includes a scoring mechanism: another LLM (Large Language Model) scores and ranks each generated hypothesis according to preset evaluation criteria, automatically identifying the most valuable research directions.

Although the current focus is on the first few steps (processing papers, building knowledge graphs, and generating hypotheses), the technical architecture is designed with subsequent steps of the entire scientific process in mind, including experimental design and integration with laboratory APIs.

The key advantage of this architecture lies in its modular design: each component can run independently or be combined into a complete workflow. This means researchers can use only the specific functions they need, or let the system automatically execute the entire research process. Additionally, its open-source nature allows the community to continuously improve and extend the system's functionality.

## The Vision of a Million-Level BioAgents

One of the most striking parts of the presentation was the million-level BioAgents plan. This was compared to [AlphaFold@home](https://deepmind.google/technologies/alphafold/) (a project that recently won the 2024 Nobel Prize in Chemistry), but with a key difference: using blockchain economics to significantly expand participation.

"AlphaFold@home has about 2 million users donating computing resources," the presentation explained, "but with blockchain token economics, this number could expand to 20 million or 200 million."

In this vision, Bio tokens would be used to stake on agents, ensuring they behave as expected. Excess agent capacity would be made available to external researchers, similar to Google's recently launched AI Co-scientist, but in an open-source manner.

## The Complete Scientific Research Cycle

The presentation described a complete scientific research cycle in which agents can participate in every step:
1. Processing research papers
2. Adding papers to knowledge graphs
3. Generating research hypotheses
4. Designing experiments
5. Executing experiments through cloud laboratory APIs
6. Putting experimental results on-chain, creating "on-chain science"
7. Intellectual property development and productization

![flow of Scientific Research](https://i.imgur.com/x9V8Y51.png)

Particularly noteworthy is the ability to connect with real-world experiments. "Agents cannot directly affect the physical world, but there are now a series of companies offering cloud laboratory APIs," the presentation explained. "Agents can design experiments, request labs to execute them through APIs, and then receive results within hours or days."

## Scientific Foundation Models: Specialized AI

Another highlight of the presentation was the discussion of emerging scientific foundation models, which are trained from the start to be experts in specific scientific domains:

1. **[EVO 2](https://arcinstitute.org/tools/evo)** by Arc Institute: This is the most advanced model in the field of biology currently. It was built collaboratively by NVIDIA, Stanford, UC Berkeley, and UCSF, and is an open-source model. EVO 2 was trained on over 9.3 trillion tokens (referring to nucleotides in this context), covering data from over 128,000 genomes across the three domains of life. This model was released in early 2024, and its potential has yet to be fully explored, possibly becoming a powerful tool for biology and DNA research.

2. **[TXGemma](https://developers.google.com/health-ai-developer-foundations/txgemma)** by Google: This model focuses on chemistry and biology reasoning tasks, achieving state-of-the-art results in these areas. This open-source model is particularly suitable for drug discovery-related tasks, such as evaluating the toxicity of chemicals or determining molecular docking sites. TXGemma excels in understanding the complex domain of therapeutic drug discovery.

These specialized AI models differ from general large language models (like GPT or Claude) in that they are not merely fine-tuned but are designed and trained at a core level to be experts in specific domains. They have built-in basic physical and chemical rules of the relevant scientific fields, enabling a deeper understanding of the essence of scientific problems.

When these scientific foundation models are combined with BioAgents, they create more powerful scientific research tools. For example, when handling biology-related tasks, the system can automatically switch to the EVO 2 model; when processing drug discovery tasks, it can use the TXGemma model. This precise matching of specialized models with tasks will greatly enhance the quality and speed of scientific research.

## Conclusion

This presentation outlined an exciting future vision: an AI-driven decentralized scientific research network capable of generating hypotheses, designing experiments, and creating new knowledge at unprecedented speeds. This vision combines the latest advances in artificial intelligence, blockchain, and biotechnology, providing a new pathway to address the most significant scientific challenges facing humanity.

From the success of AlphaFold to the ambition of BioAgents, scientific research is undergoing an AI-driven revolution. Agent science is an emerging field with continuously enhancing capabilities and technical thought output. The core of this revolution is not only computational power but also the spirit of decentralization and open collaboration.

This is just the beginning of the journey, but it already shows what the future of scientific research might look like—a global network composed of millions of AI agents, working together to advance our understanding of the natural world.

