---
title: "Unlocking AI’s Potential in Research"
description: "Key insights from Dr. Barend Mons’s lecture on leveraging AI for scientific discovery, including the golden zone of knowledge, FAIR data principles, nanopublications, and human-machine collaboration to navigate the overwhelming complexity of modern data."
publishDate: "2025-04-12"
tags: ["AI", "scientific discovery", "DeSci", "knowledge networks"]
---

### TLDR

Dr. Barend Mons’s lecture redefines AI’s role in scientific discovery, addressing the challenge of overwhelming data with 120,000 gene-disease hypotheses. He introduces the “golden zone” for meaningful discoveries, advocates for FAIR data and nanopublications to make knowledge machine-readable, and proposes human-machine collaboration to focus on impactful breakthroughs, offering a roadmap for navigating the data tsunami in science.

![Dr. Barend Mons](https://images.squarespace-cdn.com/content/v1/5f02c5e22af67762d729af7c/55d3027b-2259-48c8-b3c8-dac6434346c7/Barend+Mons_LUMC.jpg)

Dr. Barend Mons

---

As a biologist, you leverage cutting-edge AI tools to analyze the relationship between genes and diseases. After extensive computations, the computer finally delivers results: 120,000 potential new hypotheses. Faced with this daunting number, a reviewer from *Nature Genetics* poses a single question: “What can we actually do with these 120,000 hypotheses?”

This was the real dilemma faced by molecular biologist Dr. Barend Mons and his research team. In a 40-minute in-depth lecture, Mons not only shared this challenge but also introduced a transformative framework for scientific discovery, redefining AI’s role in supporting research.

## The Real Needs of Experimental Scientists

Biomedical scientists spent a decade validating roughly 6,000 gene-disease associations, each requiring significant funding. With 120,000 hypotheses—representing only the top 1% of likely results—experimental validation becomes impractical.

Modern scientists don’t lack hypotheses; they risk being overwhelmed by too many possibilities. Machines can detect countless patterns, but they don’t understand their significance. As a result, scientists are forced to sift through associations that may lack practical value.

The scientific community doesn’t need tools generating millions of hypotheses, most of which fall into a chaotic region too complex for human comprehension. What’s needed are tools that pinpoint valuable discoveries.

## Data Access Revolution: From Data Sharing to Data Visiting

As data grows increasingly vast, complex, and sensitive, traditional data-sharing models face challenges. Dr. Barend Mons proposed a new paradigm called “data visiting,” where algorithms access data sites, obtain permission for specific studies, and retrieve only the results.

Think of it as a railway network: algorithms are trains, and data are stations. Trains visit stations rather than forcing all data to centralize in one place.

This approach tackles multiple challenges. First, the sheer volume of data—life sciences alone have accumulated roughly 100 trillion scientific facts or associations—is too vast, grows too rapidly, and is too diverse for human minds to process.

![](https://i.imgur.com/cWwfT1y.png)

Second, privacy concerns extend beyond personal health data. Information about natural resources or rare species, for instance, is also sensitive. In the Netherlands, the location of a rare plant was published and stripped bare the same day. Museum shell locations were disclosed and promptly plundered. Privacy protection isn’t just about humans.

## The Golden Zone of Scientific Discovery

The core idea of the lecture is identifying the “golden zone” of scientific discovery, which Mons calls the region near the percolation point.

As complexity increases, a critical threshold—the percolation point—emerges. Beyond this point, systems descend into cognitive chaos. In diagrams, the percolation point is marked by a green dot, and true knowledge discovery occurs in the region just around it.

Scientific knowledge exists on a spectrum from simple to complex:
- **Too simple**: Already known, offering no novelty.
- **Too complex**: Incomprehensible and impractical for application.
- **The middle ground**: Novel yet understandable and applicable.

This middle ground is the golden zone of discovery, where machines can reveal new connections that remain comprehensible to human scientists.

Human understanding has improved over time. Once, a scientist could grasp all human knowledge, but now even a single field exceeds an individual’s capacity. For example, in human genetics, if AI states that “25,000 genes and millions of regulatory sequences make us human,” it’s accurate but useless. Scientists need specific findings, like “this gene may be linked to this disease.”

## FAIR Data: The Foundation for AI-Ready Knowledge

To enable machines to assist in scientific discovery, data must adhere to the FAIR principles: Findable, Accessible, Interoperable, and Reusable. Dr. Barend Mons, a co-founder of FAIR, now reinterprets it as “Fully AI-Ready.”

![](https://i.imgur.com/kpRmIex.png)

The core idea is that machines must genuinely understand data’s meaning to support science effectively. Like human communication, when I say “cancer,” others understand I mean the disease, whether I use “cancer” in English, “Krebs” in German, or a medical code like “C0-265.” Machines need this same ability to recognize that different terms refer to the same concept.

Machines struggle with concepts that are similar but not identical. For instance, a “piano” means a heavy object to a mover but a musical instrument to a musician. Humans grasp this distinction easily, but machines require precise definitions and relationships.

![](https://i.imgur.com/ioY7gY7.png)

## Nanopublications: The Smallest Units of Knowledge

To make scientific knowledge machine-readable, the team developed the “nanopublication” system, breaking complex knowledge into the smallest building blocks. Each nanopublication contains three parts: subject, predicate, and object—for example, “Drug A - treats - Disease B.”

Every nanopublication has a unique identifier and detailed provenance, indicating its source, discovery date, and discoverer. This allows machines to track reliability and timeliness.

Scientists estimate that all life sciences knowledge can be broken down into:
- ~100 trillion basic knowledge units (nanopublications).
- ~100 billion unique scientific statements (same content, different sources).
- ~1 million key concepts (genes, diseases, drugs, etc.).

With this structured approach, even vast knowledge bases become manageable. In fact, the core knowledge of key concepts can fit on a standard laptop.

## Knowledge Networks: Dynamic Relationships Between Concepts

Scientific knowledge is not static; it evolves continuously. The team organizes related knowledge units into “nodes,” collections centered on concepts like a specific disease or drug.

As new discoveries emerge, these nodes shift in conceptual space. By observing changes in distances between nodes, scientists can uncover potential new connections.

For instance, the team noticed two nodes—one for malaria and another for a cancer drug—moving closer in knowledge space. This suggested the cancer drug might treat malaria by targeting a related enzyme. While theoretically plausible, experiments showed the drug’s molecules were too large to enter red blood cells.

This highlights the value of human-machine collaboration: machines identify possible patterns, and humans evaluate their feasibility.

## The Value of Connecting Diverse Knowledge Sources

Breaking knowledge into small units enables seamless integration of different sources, like puzzle pieces forming unexpected patterns when combined.

The team demonstrated this with two medical databases—one tracking gene mutations and another recording gene “switches.” Combined, they revealed that many diseases stem not from faulty genes but from defective switches—a discovery invisible when examining either database alone.

During the COVID-19 pandemic, this approach helped evaluate drug efficacy. By connecting diverse data, researchers built a simplified model of drug-virus interactions. It showed that a widely discussed drug had limited connections to the virus, while a steroid drug had more. The model predicted the steroid’s superior effectiveness, later confirmed by medical tests.

## Constraining AI Outputs: Conceptual Models as Guardrails

Improving input data quality is only half the solution. Equally critical is constraining AI’s output. Unrestricted AI might produce scientifically absurd conclusions, like proteins forming complexes with buildings.

Mons suggests using conceptual models as scientific guardrails to prevent AI from proposing impossible ideas. He envisions a slider mechanism:
- **Far left**: AI produces only known, conservative conclusions—lacking novelty.
- **Middle (golden zone)**: AI generates meaningful, testable, logical hypotheses.
- **Far right**: AI produces highly creative but often impractical ideas.

Scientists need tools to adjust this “slider” to focus on the golden zone.

## Hybrid Intelligence: The Future of Scientific Discovery

Mons’s ultimate vision is a true human-machine collaboration system. Machines excel at spotting patterns in vast data, but they don’t assess meaning. Humans excel at evaluating significance but can’t handle massive datasets.

In an ideal model, machines identify patterns using high-quality knowledge graphs, filter implausible results with conceptual models, and focus outputs on the golden zone. Human scientists then evaluate these findings to decide what merits further study.

We don’t need tools generating endless hypotheses. We need tools guiding us to true breakthroughs. This is the future of scientific discovery.

Through this lecture, Barend Mons not only highlighted the limitations of current AI-assisted discovery but also charted a new path, precisely locating valuable knowledge amid a flood of data. In an era of explosive data growth, this approach offers a new roadmap for science.
