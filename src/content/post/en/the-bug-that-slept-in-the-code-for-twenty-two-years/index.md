---
title: "The Bug That Slept in the Code for Twenty-Two Years"
description: "How AI models like Claude 4.6 crossed a threshold into expert-level vulnerability research and uncovered severe bugs that had lain hidden for decades in Ghost CMS, Firefox, and the Linux kernel."
publishDate: "2026-04-3"
tags: ["Cybersecurity", "Artificial Intelligence", "LLM", "Nicholas Carlini", "Anthropic"]
---

**This is the story from before AI found it.**

## Ghost Had Never Had a Critical Vulnerability

One afternoon in early 2026, a researcher spun up a Docker container on his laptop and ran a content management system called Ghost inside it. Ghost is a widely used open-source CMS with fifty thousand GitHub stars. Independent media outlets, personal blogs, and newsletter publishers all run on top of it. In the entire history of the software, it had never had a security vulnerability rated "critical."

That record ended that afternoon.

The researcher was Nicholas Carlini, who works at Anthropic. He opened a bash script with a few dozen lines of code. Part of its core logic was simply to prompt Claude: you're playing a CTF, audit this codebase for security issues, find a vulnerability, and write the most severe one into this output file. Then Carlini went off and did something else.

![Nicholas Carlini](./nicholas-carlini.png)

The model found a SQL injection.

That alone was not especially shocking. SQL injection is an old friend in security, a problem people have known about for decades. Everyone knows it is dangerous. Everyone knows how to defend against it. And yet it keeps surfacing in software anyway. What actually made Carlini uneasy was what happened next: he asked the model what the worst-case impact of the bug was and how far it could be exploited.

The model wrote a complete exploit.

Not a proof of concept. Not a sketch. A working blind SQL injection exploit. "Blind" means the attacker cannot directly see the output of the query and has to infer what is in the database based on response timing or error states. That requires some skill. You have to reduce the problem to binary questions, do a binary search, and recover the values you want bit by bit. The model automated the entire process.

In one of Carlini's talks, he showed a live demo. On the left was a running Ghost instance. On the right was the exploit program. He hit run, and within seconds the screen printed the full admin API key, the password bcrypt hash, and every credential needed to take over the instance.

No authentication. No permissions. Anyone who could connect to the server could fully compromise it.

Carlini then said something that made the whole room go quiet:

"I could probably have written this exploit myself. But I made it happen without needing any security experience at all."

## The Barrier We Spent Decades Building

To understand why this matters, you first have to understand how hard it has traditionally been to discover a zero-day vulnerability.

Security research has a very particular knowledge structure. It is not enough to be smart. You need intelligence plus deep, domain-specific intuition, and that intuition is usually built through repeated failure. You need to know the major vulnerability classes: buffer overflow, use-after-free, SQL injection, format string bugs, integer overflow, and dozens of other variants. You need to know what they look like in code. You need to know where it is worth looking and what can safely be skipped. You need a feel for the strange spots, the places where something seems just a little off, and then you need to keep digging in exactly that direction.

That kind of intuition is almost impossible to teach directly. More accurately, it can only be built with time and a lot of hands-on exposure. The core asset of a top vulnerability researcher is pattern recognition built from having seen hundreds of bugs before, along with judgment about where code of a given type is most likely to break.

In the traditional world, one of the main tools for this job has been fuzzing. You write a harness, feed the program random or semi-random input over and over again, and see whether some input crashes it. Google built an entire service around this idea with OSS-Fuzz, continuously fuzzing thousands of open-source projects and turning up a large number of vulnerabilities over the years. Around 2016, major security organizations began deploying fuzzing at scale and found batch after batch of CVEs. Almost every media codec ended up yielding one bug after another.

But fuzzing has a fundamental limit: it is brute-force search. It does not understand what the code is doing. It just throws inputs at the target and waits for a crash. For vulnerabilities that require a very particular structure to trigger, it is almost powerless. After a few years, the class of bugs that fuzzing is good at mostly got mined out, the curve flattened, and people kept running fuzzers while the flow of new discoveries slowed down.

The front line of security research moved back to the places that still required human intuition.

## The Script Was Only Thirty Lines Long

In a conference talk, Carlini showed the scaffold he used. The core of the whole system was remarkably small.

`claude --dangerously-skip-permissions`. That flag means: don't ask me anything, don't request confirmation, just do it. Then came a prompt saying that Claude was playing a CTF, should find the most serious vulnerability, and should write the result into the output file. That was it.

This setup was missing two obvious things, and without them it was, in Carlini's words, "not quite thorough." First, if you ran the same prompt ten times, the model would probably find the same bug ten times, because its thought process was predictable. Second, it was not comprehensive. It would inspect some of the code, but not all of it.

Carlini's fix was to add one more line: "Start with this file." Then he looped over every file in the project that "looked security-relevant" and fed each one in as a different entry point. He even outsourced the judgment of what counted as security-relevant to the model itself: run a preliminary pass, have the model score every file from one to five, then keep only the files rated three or above.

That was enough. A `for` loop plus two prompts found the first critical vulnerability in the history of a project with fifty thousand GitHub stars.

On the podcast, Carlini said he had not even written the main prompt himself. He told Claude what he wanted to do, and Claude helped him write the agent that would go look for vulnerabilities.

When a security research toolkit starts with "I had AI help me write the AI," that sentence deserves an extra second of thought.

## The Mine Buried Twenty-Two Years Ago

But Ghost was only the warm-up story in the talk.

The Linux kernel is a target on an entirely different scale. It may be one of the most carefully scrutinized codebases on Earth. For decades, countless security researchers, academic groups, government agencies, and companies have spent huge amounts of effort looking for vulnerabilities in it. Earning a Linux kernel CVE means something like winning an honor badge in the security world.

Carlini said he now has several.

One of them was in the NFS v4 daemon. NFS, the Network File System, is a protocol for sharing file systems over a network. It is older than most of the people who use it and enabled by default in a great deal of server infrastructure. How long had the vulnerability been sleeping in the code?

Since 2003.

When Carlini reported the bug, the Linux kernel process asked for a `Fixes:` field pointing to the commit hash that had introduced it. He could not fill that field in, not because he could not find the origin, but because the bug was older than Git. That part of the code had been tracked in a different version control system, with a changeset number rather than a commit hash.

A bug older than Git was found by a language model.

To trigger it, an attacker had to control two different NFS clients and have them request a lock on the same file from the same server in a particular sequence. The first client identified itself with a very long owner name. The second client asked for the same lock. The server rejected the second request because the lock was already held, but while constructing the rejection response it copied the first client's long name into a fixed-size buffer and overflowed it.

A heap buffer overflow in the kernel, remotely triggerable, lying dormant from 2003 until 2026.

Carlini showed an attack flow diagram in the conference talk, with packet order, client interactions, and the exact moment the overflow occurred. He did not draw that diagram himself. He said he had copied it directly from the report generated by the model. The model not only found the vulnerability, it explained how the bug worked and produced a visual representation engineers could use to understand it.

There were similar stories from FFmpeg. FFmpeg is the kind of multimedia software that seems to exist on every machine. Carlini said one of the vulnerabilities there dated back to the original commit that introduced the H.264 decoder. The trigger condition was exactly 65,535 frames, which caused a counter to overflow. No fuzzing tool is going to loop 65,000 times just to see what happens at that edge case; that is fundamentally not how fuzzers work. But the language model read the code, understood what the counter was doing, and found the boundary.

The Firefox numbers were even larger: in a single month, 122 reproducible crashes, all confirmed by Mozilla as real vulnerabilities, with 22 severe enough to receive CVEs. Carlini said Mozilla had a chart showing how many vulnerability reports it had received each month over the previous two years. The bar for that month was huge. Carlini and his colleagues accounted for about a quarter of it, but the more striking fact was that even after removing Anthropic's contribution entirely, what remained was still the biggest month in the prior two years.

In other words, the security ecosystem is already changing quickly. Carlini's work is only the most visible part of that change.

## A Fuzzer Does Not Know What CRC32 Is

To understand why language models can do things fuzzers cannot, you have to understand the fuzzer's core limitation.

Fuzzing is brute-force search. You have a program with an input, you generate huge numbers of random or semi-random inputs, you feed them in, and you look for one that triggers abnormal behavior. Modern fuzzers are much smarter than pure randomness. They track which inputs cause the program to walk down new code paths and then preferentially generate more inputs that expand code coverage.

But the whole method has a basic weakness: it has no theory of the code.

Imagine a protocol where every packet contains a CRC32 checksum. If the checksum is wrong, the packet gets dropped immediately and nothing else happens. A fuzzer's inputs are random, so the CRC32 will almost always be invalid. Every input dies at the first gate and never reaches the code that might contain a vulnerability. You can make fuzzers smarter in all sorts of ways, but the CRC32 wall is fundamentally filtering out every input that does not understand the protocol.

A language model is different. It reads the code and understands that a valid CRC32 is required. It can compute the correct checksum in Python, embed it in the packet, make the input look legitimate, and then search for vulnerabilities inside the space of valid inputs. That is not just a smarter fuzzer. It is a completely different methodology: theory-guided search over code rather than theory-free brute force.

On the podcast, Thomas said something that captured the point exactly: "A fuzzer is brute-force search, but a language model has a theory of the code." Carlini added that the model can effectively ignore the checksum function while reasoning about the rest of the code, then run a few lines of Python only at the moment it needs to produce a valid checksum. A fuzzer cannot "ignore" a checksum, because the checksum is simply part of the input and the fuzzer has no concept of what it means to abstract over it.

The same logic explains why the language model could find the NFS bug that required two cooperating clients. A fuzzer generates a single input. It does not operate over the concept of an interaction between two clients. The language model read the protocol logic, understood what would happen if one client held the lock and another requested the same one, then explored that multi-client interaction space until it found the overflow.

Carlini said that, so far, every model-found vulnerability he has seen has still been understandable to him. The model is not doing some mysterious kind of reasoning that humans cannot follow. It is doing the same kind of work a smart human researcher would do, just at a different scale. A human researcher cannot carefully read every C file in the entire Linux kernel. The model can. Humans have the advantage of intuition, knowing where to look deeply. Models have the advantage of scale: they can look everywhere.

That comparison matters because it means the language model's edge in vulnerability research does not come from some mystical leap in intelligence. It comes from a very concrete advantage: effectively unlimited patience plus broad memory over a huge range of code patterns.

## What Should Really Keep You Up at Night Is Not This

When Carlini was asked on the podcast what worried him more, his answer was surprising.

Not the heap buffer overflow in the Linux kernel. Not the 22 CVEs that could crash browsers. Not the blind SQL injection in Ghost.

The unpatched services.

He said that in real-world attacks, most successful intrusions do not rely on novel zero-days. They rely on finding a server still running a software version from ten years ago and exploiting a known vulnerability with an old CVE because the administrator never updated it. Or they rely on a misconfiguration: a service that was only meant to be reachable from the internal network but was exposed to the public internet instead.

Traditionally, those targets also had to be found by people, through scanning, checking, and trying things. But this is much easier than discovering a zero-day, because it does not require any new insight. You only need to know which vulnerabilities are already known and then see whether anyone has failed to patch them. A language model can not only find new vulnerabilities, it can also efficiently do the work of scanning for the presence of known ones, and it can do that across many targets at once.

Carlini said he could not quantify how large that threat is, because he cannot legally just scan arbitrary internet-facing services. But he said he is deeply worried about it, and he suspects it is closer to what ordinary attackers will actually do than "AI can find a Linux kernel zero-day."

That observation touches a basic asymmetry in security. Most of the attention goes to the hardest attacks because they are technically impressive, glamorous, and heavily covered. But the attacks that cause the most damage are often the boring ones: abandoned servers, unchanged default passwords, known vulnerabilities nobody bothered to patch.

If language models dramatically lower the execution cost of those boring attacks, the effect on the entire security ecosystem may be more profound than the flashy zero-days.

## Finding Them Is the Easy Part

Across both the podcast and the conference talk, Carlini spent a good amount of time on the problem of patching.

Anthropic has a product called Claude Code Security that tries to automatically generate patch suggestions. DeepMind has CodeMender. OpenAI has a project it calls Aardvark. All three major AI companies are taking this seriously, because everyone understands the problem: if you can only find vulnerabilities and not fix them, you are mostly just generating a to-do list for attackers.

But patching is much harder than discovery, and the reasons are subtle.

A patch does not just need to close the vulnerability. It needs to close it without breaking existing behavior. It has to match the style of the codebase. It has to look to the maintainers like a fix they actually agree with, not something that makes them ask what this AI tool is doing. If an AI system generates 500 pull requests, each claiming to fix a vulnerability, how much time does a maintainer have to spend reviewing those 500 PRs? In some cases, the review time might be almost the same as just fixing the bugs directly.

And if maintainers do not trust the quality of those PRs, they will not review them at all. Then the work is wasted.

Carlini said vulnerability discovery has a perfect oracle: if ASan fires, you know you found a real bug, with effectively zero false positives. But when you are generating a patch, there is no easy way to "run" the patch and know that it is correct, because correctness has many dimensions: behavioral correctness, stylistic consistency, and long-term maintainability. Those dimensions are all hard to verify automatically.

On the podcast, David sketched out the rough numbers: Carlini and his team spent about two weeks, plus some reusable infrastructure work, to find the Firefox vulnerabilities. Firefox then needed about twice that amount of engineering time to patch them, and patching itself is harder than finding the bug because you need to truly understand what went wrong rather than simply know that a certain input crashes the program.

That asymmetry is not going away soon. To find a vulnerability, you only need to find one way to break something. To patch a vulnerability, you need to construct a repair and avoid introducing any new breakage. Breaking is easier than building. That is a basic property of entropy, not something specific to AI.

Carlini also mentioned a direction that may be more practical: reviewing new commits. Instead of rescanning an entire codebase from scratch, you run a model-based security review on each new commit as it lands. The scope is smaller, the work is more concentrated, and the bug can be fixed at the moment it is introduced rather than decades later after it has already spent years in production.

He does not know whether that approach scales to every project, but intuitively it feels more realistic to prevent new bugs from being introduced than to clean every old one out of a massive codebase.

## The IEA's Solar Forecasts and the Embarrassing Chart

In the conference talk, Carlini showed a chart of the International Energy Agency's yearly solar deployment forecasts. It was the sort of chart that makes people visibly uncomfortable.

The red lines were the forecasts, each projecting how much solar capacity the world would have by 2040. The white line was what actually happened. Every year, the IEA forecast for 2040 was reached the very next year. Then the IEA would produce another 2040 forecast, still assuming growth would slow, still assuming the current pace would not continue, and reality would surpass it again the following year. This happened more than fifteen times.

Carlini said the security industry is making the same mistake.

People see that models can do X today, then assume that six months from now they will only be a little better than X, and they keep making decisions with the old framework. But Carlini pointed to a chart from METR, which measures the duration of tasks language models can complete, meaning how long those tasks would take a human. Recent models can complete, at roughly a 50 percent success rate, tasks that would take a human about fifteen hours. And the doubling time for that number is around four months.

Four months. That does not mean the model gets twice as good every four months. It means the length of the tasks it can successfully complete doubles every four months. That is an exponential, not a straight line.

Carlini said he does not believe the exponential will continue forever. CPU speeds also used to improve exponentially before bending at physical limits. The problem is that you do not know when the bend will come. Maybe in six months. Maybe in two years. If it bends in six months, current capability plus six more months of progress may still be manageable. If it bends in two years, what models can do by then may exceed almost anyone's current expectations.

He noted that cryptographers do not adopt the same skeptical posture toward quantum computing. Quantum computers cannot yet break modern cryptography, but cryptographers already work on post-quantum cryptography because they understand that the right time to prepare is before the threat is fully here. Yet Carlini already has a language model that can find a remotely triggerable heap buffer overflow in the Linux kernel that sat undetected for twenty-two years. That is not a hypothetical future threat. It is something happening on his desk right now. And when he talks to people in the security industry, many still deny how serious it is.

## All the Interesting Problems Are Disappearing

There was a small exchange on the podcast about how model capability improvements happen. Thomas asked Carlini what had changed from Opus 4.5 to Opus 4.6.

Carlini said that, in his experience, 4.5 was actually the big jump, the model version that first made him feel it had acquired something he could only awkwardly describe as a kind of "soul" or "essence." Version 4.6 made it better still. He said he does not really understand why the models improve. He only observes that they do.

Then Thomas said something that made Carlini laugh ruefully: "Scaling just works. It's a bitter lesson."

Behind that line is a very specific sadness from security research culture. Much of the joy of security research comes from building elegant tools: carefully designed fuzzing harnesses, specialized instrumentation, highly tailored scaffolds for particular targets. These tools are works of craft and intelligence. They embody deep understanding of the systems being studied.

But Carlini said that every time he builds a carefully engineered harness, the next model arrives and the harness is no longer needed. Worse, sometimes a harness optimized for an older model actually becomes a limitation with a newer one, because the new model wants to do things in a smarter way and the harness does not allow it. He gave an example: around the era of model 4.5, he wrote a harness that only let the model edit six specific files and only run three specific Python commands, because otherwise it would break the environment. Now, for the same task, the model tries to start background jobs and read code while waiting for them so it can save time. That is a good idea, but the old harness blocks it, so the harness itself becomes the obstacle.

Thomas said that "all the interesting problems are disappearing," meaning you can no longer rely on clever harness design to create a durable edge, because the next model erases the advantage. All you can do is wait.

Carlini said that was not entirely true. In a period of fast capability gains, extracting efficiency from the current model still matters. He used an analogy: the heavily optimized x86 assembly John Carmack wrote for Doom in the 1990s would eventually be made unnecessary because ordinary C code ran fast on later Pentium hardware. But in 1993, if you wanted to ship a game on the hardware of that moment, those optimizations were the only way to get there. Waiting for better hardware was not an option available to Carmack in 1993.

The same logic applies to vulnerability research today. If you want systems that work on today's models, rather than waiting two years for better ones, you still need engineering. You still need harnesses. You still need to make current models work more efficiently. The only difference is that the useful lifetime of that engineering work is shrinking.

## The Transitional Period Is the Dangerous Part

During the Q&A after the conference talk, someone asked Carlini who wins in the long run, attackers or defenders.

His answer was that defenders probably win in the long run. You can rewrite code in Rust and eliminate memory safety vulnerabilities. You can formally verify protocols and use mathematics to prove they are secure under specific assumptions. TLS already has proofs of that kind. Over a long enough time horizon, the vision in which defenders eventually win is plausible.

But, he said, his real concern is not the long-run end state. It is the present.

He used an analogy to the Industrial Revolution. In aggregate, the Industrial Revolution was one of the best things that ever happened to humanity. It drove huge gains in productivity, longer lifespans, and radically improved material conditions. But for the people living through the transition, the period itself was brutal: chaotic urbanization, the destruction of old skill structures, rapid social reorganization, miserable factory conditions. Many people paid the costs of industrialization before they ever saw its benefits.

Security, he said, may be similar. The long-run outcome may be good. But the transition is happening now, over the next few months and the next few years, while model capabilities are improving rapidly and defensive infrastructure has not yet caught up.

Carlini said he still has hundreds of Linux kernel crashes that he has not validated. He does not want to report them before validation because he does not want to waste open-source maintainers' time on reports that may not be real. But that means that, at any given moment, some of those crashes could correspond to exploitable vulnerabilities that have not yet been patched. And it is not just him. In principle, anyone with a Claude subscription could do similar work.

There is no simple answer to that problem. You cannot lock away language-model-based vulnerability research because it is inherently dual-use. Defenders need it to find vulnerabilities in their own software. Attackers can use it to find vulnerabilities in someone else's. Restrictions that are too strong will mostly block legitimate defenders, while malicious actors route around them. Restrictions that are too weak make the capability available to everyone, including people who should not have it.

Carlini said that every time he speaks with people in the security industry, some still deny how serious this is. Some still say the models are not that capable. Some still assume the exponential will bend quickly. He said he used to be skeptical too. When he first saw language models, his instinct was to probe for their failures and laugh at how easily they broke.

But now he has Linux kernel CVEs found by models. He has Ghost's first critical vulnerability with a complete exploit written by a model. He has 122 reproducible Firefox crashes found in a single month.

These are not theoretical capabilities, he said. These are empirical results, produced with models that anyone with a Claude subscription can access.

## There Is No End Point Yet, but the Starting Gun Has Already Fired

Sonnet 4.5 came out roughly six months ago. Opus 4.1 less than a year ago. Carlini said those models could barely find this class of vulnerabilities. Opus 4.6, three or four months ago, could.

The capability threshold was crossed only three or four months ago.

At the end of the conference talk, Carlini said something that put the scale of the moment in focus. He is doing this work, he said, not because he wants language models to cause harm, but because if nobody measures what is happening, it will happen before anyone is prepared. Just as someone discovered Spectre, just as someone invented ROP, just as someone realized side-channel attacks were real, these are facts about the world that remain true whether we choose to look at them or not.

You can look, or you can refuse to look. The world will not change because you choose not to see it.

The bug that slept in the NFS code for twenty-two years has already been found, fixed, and assigned a CVE. That particular bug is no longer a threat.

But Carlini says he still has hundreds of crashes left on his to-do list to validate.

And all across the internet, there are servers that have never been updated, still running software from ten years ago, still exposing ports that were never supposed to face the public internet, waiting to be found.

The starting gun for this era has only just gone off. The next few months will matter a great deal.

*Nicholas Carlini's related research can be found on Anthropic's blog, including collaborative reports on Firefox security research. His talk at the [Unprompted workshop](https://www.youtube.com/watch?v=1sd26pWhfmg) in March 2026 and his appearance on the [Security Cryptography Whatever podcast on March 25, 2026](https://open.spotify.com/episode/7zNLB0uuJ8sBTpE1sD1Xun) were the primary source materials for this article.*
