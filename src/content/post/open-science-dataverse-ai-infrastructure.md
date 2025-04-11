---
title: "How Dataverse Builds Open Science Infrastructure for the AI Era"
description: "An exploration of how Dataverse is transforming scientific data management by creating interconnected knowledge networks that make research data findable, accessible, interoperable, and reusable across disciplines and languages."
publishDate: "2025-04-11"
tags: ["Dataverse", "knowledge graphs", "AI", "scientific research", "DeSci"]
---

# How Dataverse Builds Open Science Infrastructure for the AI Era

## The Dilemma of Research Data: Existing but Difficult to Discover and Use

You're researching the impact of climate change on a certain crop. You know researchers worldwide have collected vast amounts of relevant data, but these valuable resources are scattered across databases in different countries and institutions. Some are described in English, others in Dutch or German. Some are publicly available, others require application access. Worse yet, even when you find the data, they come in different formats and standards, making them difficult to integrate and analyze.

This is a major challenge facing modern science. While the volume of data has grown explosively, usability hasn't improved correspondingly, making it difficult for scientists to find and effectively utilize them. In a presentation by Slava Tykhonov, a researcher at the Royal Netherlands Academy of Arts and Sciences, he shared how the Dataverse project collaborates with Harvard University to build future infrastructure for open science, making over 750,000 scientific datasets globally discoverable, machine-readable, and usable across disciplines.

## From Data Repositories to Active Knowledge Networks

In the past, scientific data management was more like establishing archives—neatly storing data on shelves, labeling them, and waiting for someone to borrow them. In the digital age, this approach is far from sufficient.

The Dutch innovation lies in transforming data management into building active knowledge networks. Imagine a vast network where each dataset is a node, connected to others through countless links. These connections showcase various relationships between data: what methods this dataset used, what topics it researched, how it relates to other research, who created it, and so on.

This networked data structure allows researchers not only to find specific datasets but also to see related research contexts. For example, when you find data on wheat yields in a certain region of the Netherlands, the system can also show research that used this data, related meteorological data, and possible analysis methods.

## Dataverse: A Global Platform for Sharing Scientific Research Data

At the core of this innovation is [Dataverse](https://dataverse.org/), an open-source data platform originally developed by Harvard University. Dutch researchers not only adopted this platform but made significant improvements to better suit the needs of global scientific collaboration.

Dataverse functions as a library system for global scientific data, but it's much smarter than traditional libraries. Currently, the system has been deployed in over 120 countries, collecting approximately 750,000 high-quality scientific datasets. Harvard and the Netherlands each manage about 200,000 datasets, becoming important nodes in this global network.

The Dutch contribution isn't just increasing the volume of data but, more importantly, improving how data is connected and discovered. They introduced search engine-like functionality that understands scientific research better than ordinary search engines. The system understands academic terminology, research methods, and disciplinary connections, enabling more accurate retrieval of needed information.

The Dataverse search API can be tried [here](https://guides.dataverse.org/en/latest/api/search.html).

## The FAIR Principles of Data: Making Data Truly Useful

The guiding philosophy behind these improvements is the FAIR principles, which state that data should be Findable, Accessible, Interoperable, and Reusable. This might sound abstract, but it's highly practical.

- Findable means data has clear identifiers and rich descriptions, making it easy to find
- Accessible means data can be obtained through standard methods with clear usage conditions
- Interoperable means data uses standard formats and vocabularies, seamlessly integrating with other data and tools
- Reusable requires detailed background information about the data, allowing it to be used in new research

The DANS institute (Data Archiving and Networked Services) of the Netherlands Academy of Sciences has been promoting the practical application of FAIR principles. They haven't just theorized but have developed practical tools and services to help researchers manage and share data according to these principles.

## Breaking Language Barriers: Cross-Language Data Discovery

In multilingual environments like Europe, language barriers present a major challenge for data sharing. An important innovation by the Dutch team is the development of intelligent translation systems allowing researchers to find data described in other languages using their own language.

If you're an English-only researcher needing to find social survey data from a specific region in the Netherlands, traditionally, you might never find these datasets if their descriptions are in Dutch. But with this system, you can search in English, and the system will understand your needs, find those Dutch-described datasets, and present them to you in English.

This functionality relies on [ODISSEI](https://odissei-data.nl/) (Open Data Infrastructure for Social Science and Economic Innovations), a data platform designed specifically for social science and economics research in the Netherlands. ODISSEI integrates multiple data sources and uses artificial intelligence technologies to enable cross-language search and data integration.

## Making Machines Understand Data: Preparing for the AI Era

As artificial intelligence technologies develop, enabling machines to understand and utilize scientific data becomes increasingly important. The Dutch team is also at the forefront in this area.

The system they developed helps not only human researchers find data but also allows machine learning algorithms to directly understand and use this data. This is achieved through a standard called "Croissant"—yes, named like the French breakfast pastry for easy recall.

The [Croissant standard](https://research.google/blog/croissant-a-metadata-format-for-ml-ready-datasets/) provides machine learning systems with a "manual" for understanding data, explaining its structure, meaning, and usage methods. This makes it easier for researchers to use data in artificial intelligence models, accelerating the process of scientific discovery.

## RAG and Croissant: The Future of Retrieval Augmented Generation
In his presentation, Slava particularly emphasized the importance of Retrieval Augmented Generation (RAG). RAG is an innovative method allowing AI systems to query external knowledge bases in real-time when generating answers, rather than relying solely on knowledge from training data.

The emergence of the Croissant standard has driven a paradigm shift in data management, from centralized storage to a distributed, interconnected data ecosystem. This standard was initially introduced by Google and has now been adopted by Kaggle, Hugging Face, and Dataverse.

In Dataverse, users can now easily obtain AI-ready data formats through the Croissant Export button, directly usable in machine learning workflows. This feature is particularly important as it allows researchers to easily:
1. Use data across platforms, regardless of where it's actually stored
2. Automatically check license information to ensure compliant use
3. Directly integrate with mainstream machine learning frameworks like TensorFlow and PyTorch

For older version repositories that don't yet support Croissant, Slava's team has also developed Python tools to convert data into standard-compliant formats.

## Knowledge Graphs: Visual Representation of Data Relationships

To more intuitively display relationships between data, the Dutch team built a knowledge graph containing approximately 50 million connection points. This sounds massive, but it's actually a way of representing information relationships, similar to mind maps you might have seen, but on a larger, more systematic scale.

![](https://i.imgur.com/WUCI5YT.png)
[source](https://graph.muse-it.eu/)

Knowledge graphs represent relationships in the form of triples, such as Dataset A - Research Topic - Climate Change or Researcher B - Created - Dataset A. These simple relationships combine to form a complex and rich knowledge network.

To efficiently manage this vast network, they use the [QLever system](https://github.com/ad-freiburg/qlever) (pronounced like "clever"), a tool designed specifically for processing large-scale relational data. It can quickly answer complex questions, such as "Find all research using satellite data to study North Sea cod populations"—the kind of multi-condition queries that are otherwise difficult to process.

## Powerful Combination of SPARQL and Traditional Search
The power of knowledge graphs lies in their ability to precisely retrieve information through [SPARQL](https://www.ontotext.com/knowledgehub/fundamentals/what-is-sparql/), a specialized query language. But not all users are willing or able to learn this technical language. Therefore, they designed a dual-track query system:
- Professional users can directly use SPARQL for precise, complex queries
- General users can use Google-like keyword searches, which the system automatically converts into appropriate queries

This is like a library offering both a professional classification index system for research scholars and simple title/author searches for ordinary readers. This design philosophy ensures the system is friendly to all types of users and doesn't exclude potential users due to technical barriers.

Both methods can cross different data repositories, integrating results from Dataverse nodes around the world. The system converts user queries into formats that can be sent in parallel to hundreds of data repositories, then integrates the returned results, providing a unified, consistent presentation to users.

This is similar to searching on Google, where you don't need to know which different websites or servers store the information—Google gives you a unified results page, allowing you to browse all results in the same format.

This "unified view" is particularly valuable for researchers, as they can focus on the research question itself rather than worrying about searching, integrating, and standardizing data from different sources. This greatly improves research efficiency and makes cross-institutional, cross-country data discovery and reuse much easier.

Here is a DEMO that can be tried [here](https://qlever.cs.uni-freiburg.de/wikidata/Vkrrm1):
```qlever=
PREFIX wdt: <http://www.wikidata.org/prop/direct/>
PREFIX wd: <http://www.wikidata.org/entity/>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT ?person_id ?person (COUNT(?profession_id) AS ?count) (GROUP_CONCAT(?profession_separator=" , ") AS ?professions) WHERE {
  ?person_id wdt:P31 wd:Q5 .
  ?person_id wdt:P106 ?profession_id .
  ?profession_id rdfs:label ?profession .
  ?person_id rdfs:label ?person .
  FILTER (LANG(?person) = "en") .
  FILTER (LANG(?profession) = "en") .
}
GROUP BY ?person_id ?person
ORDER BY DESC(?count)
```
![image](https://i.imgur.com/BLzodCB.png)

## The Future Integration of Artificial Intelligence and Data

The most forward-looking part of the presentation was about how artificial intelligence can be combined with these data systems. The Dutch team proposed a new approach: rather than infusing all knowledge into AI models, teach AI how to query external knowledge bases.

This is somewhat like training a smart research assistant. Instead of teaching them to memorize all facts (which is impossible), teach them how to use libraries and databases to find accurate information when needed.

The Ghostwriter system they developed is based on this concept. It can understand user questions, query relevant data and literature, and provide well-founded answers. Most importantly, it can tell you the sources of information, letting you know the reliability and limitations of the answers.

## Practical AI Tools: Bridges from Theory to Practice
The presentation introduced several practical tools demonstrating how to apply AI technology to actual scientific work:
1. [AutoGen](https://github.com/microsoft/autogen): Microsoft's lightweight agent framework
AutoGen is a small agent library developed by Microsoft, particularly suitable for beginners. It allows users to create AI agents with just a few lines of Python code, connecting different data sources and services. For example, it can let your application automatically retrieve weather data from a location, combine it with data from other sources, and then use language models to generate comprehensive analyses.
2. [Markitdown](https://github.com/microsoft/Markitdown): Converting any content into AI-ready formats
Markitdown is a tool developed by Microsoft that can convert content in various formats (PDFs, spreadsheets, documents, etc.) into structured, AI-friendly representations. This solves a common problem: most research materials exist in various document formats that AI systems struggle to understand directly.
Using Markitdown, researchers can easily convert their literature, data tables, and research records into formats that AI can effectively process, without needing to manually re-enter or structure these materials.
3. Ghostwriter: Combining local knowledge bases with AI
Ghostwriter is a tool developed by Slava himself, representing a new type of knowledge management approach. This tool can be deployed locally (without relying on cloud services) and can integrate information from various sources:
- Technical documentation and user guides
- GitHub issues and discussions
- Google forum posts
- PDF files and research papers
- Website content (obtained through crawlers)

Users can add documents or webpages they care about to the system, and Ghostwriter automatically builds semantic indexes and knowledge graphs. After that, users can ask questions in natural language, and the system will provide answers based on indexed materials rather than relying on pre-trained knowledge.

## Vector Spaces and Knowledge Graphs: AI's Dual Thinking Modes

An interesting analogy was proposed in the presentation, comparing AI systems to Dr. Jekyll and Mr. Hyde from Robert Louis Stevenson's novel—a character with dual personalities. This describes two different thinking modes in modern AI systems:
1. Knowledge Graphs (Graph Thinking): This mode is similar to structured logical thinking, with information organized into clear entities and relationships. It is dynamic, can be continuously added to and modified, and clearly expresses connections between knowledge.
2. Vector Spaces (Vector Thinking): This mode is more like intuitive thinking, with information compressed into abstract mathematical vectors. It is static (difficult to modify once training is complete) but can capture subtle patterns and similarities.

To visualize information in vector spaces, Slava recommends the "Latent Scope" tool, which can generate visual representations of vector projections, helping researchers understand hidden patterns and clusters captured by the model.

For efficient storage and querying of vector data, he recommends two tools:
- Qdrant (from a Berlin startup): Suitable for large-scale vector data, supports GPU acceleration
- ChromaDB: Suitable for smaller-scale vector storage

From Free Text to Structured Knowledge: Semantic Parsing and Disambiguation
A particularly impressive demonstration showed how to convert unstructured text into structured knowledge. For example, when encountering text like "Hotel California," the system needs to understand it could refer to:
- The Eagles' 1976 song
- A 2008 movie
- A 2013 movie
- An actual hotel
- Other possible meanings

The system queries knowledge bases like Wikidata, considers context (such as whether the discussion is about music or film), and then maps the text to the correct concept identifier. This ability for semantic parsing and disambiguation is crucial for creating high-quality knowledge graphs.

## The Future Integration of Artificial Intelligence and Data
The most forward-looking part of the presentation was about how artificial intelligence can be combined with these data systems. The Dutch team proposed a new approach: rather than infusing all knowledge into AI models, teach AI how to query external knowledge bases.

This is somewhat like training a smart research assistant. Instead of teaching them to memorize all facts (which is impossible), teach them how to use libraries and databases to find accurate information when needed.

In Slava's vision of distributed AI architecture, large language models (LLMs) act as reasoning engines interacting with knowledge graphs and databases, rather than trying to store all information. The advantages of this architecture include:
- Continuous updates: Knowledge can be constantly updated without retraining the entire model
- Traceability: Answers can be directly traced back to their source data
- Fewer hallucinations: Models rely on actual data rather than vague memories
- More efficient: Smaller models (1 billion or 4 billion parameters) combined with external knowledge may be more effective than large models alone

The Ghostwriter system he developed is based on this concept. It can understand user questions, query relevant data and literature, and provide well-founded answers. Most importantly, it can tell you the sources of information, letting you know the reliability and limitations of the answers.

## Future Vision for Open Science
The Dataverse project represents not just technological innovation but a paradigm shift in scientific research. From Harvard to the Netherlands, to partners in over 120 countries worldwide, this shared vision is redefining how scientific data is shared, queried, and reused.

When 750,000 high-quality datasets become discoverable, machine-readable, and usable across disciplines, we see not just growth in data volume but a dramatically increased potential for knowledge integration. This infrastructure is particularly suited for addressing complex global challenges like climate change and public health crises, which require integrating data from multiple disciplines and regions to effectively solve.

Through AI-ready metadata, knowledge graphs with 50 million triples, semantic search, and open APIs, Dataverse is building a truly interconnected scientific data ecosystem. In this system, the value of data lies not in quantity but in its discoverability, usability, and interconnectivity. When global scientific data can be seamlessly connected and effectively utilized by both humans and machine intelligence, we will enter a new era of scientific research and knowledge innovation.