---
title: "On-Chain Security Insights: Building a Crypto Asset Firewall"
description: "A comprehensive guide to cryptocurrency security featuring insights from BlockSec CEO Zhou Yajin on protecting digital assets, analyzing security incidents, and understanding the evolving landscape of blockchain security."
publishDate: "2025-04-24"
tags: ["Blockchain Security", "Crypto Assets", "DeFi", "Podcast"]
---

# On-Chain Security Insights: Building a Crypto Asset Firewall

In today's expanding cryptocurrency landscape, security remains the paramount concern for investors of all sizes. Before encountering actual risks, many users believe they won't become victims of the security incidents that make headlines. This comprehensive guide, based on an in-depth conversation with BlockSec CEO Zhou Yajin, explores how to build an effective security firewall for your digital assets in the Web3 world.

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsN1rMEfJwAYiLCis32CcqtybX05eJSK4ksg&s)

## BlockSec's Multi-dimensional Security Services

Founded in 2021 by Zhou Yajin and Professor Wu, BlockSec has established a solid reputation through its comprehensive security services. Going beyond the common perception of blockchain security companies as merely smart contract auditors, BlockSec offers a broad spectrum of security solutions.

### Three Core Business Segments

BlockSec's services are divided into three main segments:

**On-chain Protocol Security**: Focuses on security audits and continuous monitoring services for DeFi, NFT, and other smart contracts deployed on blockchains. This service ensures smart contracts maintain high security standards during both design and operational phases.

**User Asset Security**: Concentrates on protecting users' assets in contract wallets or invested in on-chain protocols. Asset security remains the core concern for both individual investors and institutional clients.

**Compliance and Regulatory Services**: With traditional financial institutions increasingly entering the crypto space—such as U.S. banks issuing stablecoins and crypto applications in cross-border payments—compliance needs have become more prominent. BlockSec assists regulatory bodies in establishing frameworks while helping traditional institutions meet crypto-specific compliance requirements.



## Core Security Protection Strategies

Zhou Yajin presents a comprehensive set of protection strategies for crypto assets, covering everything from basic security awareness to professional technical responses.

| Security Aspect | Key Recommendations | Implementation Details |
|-----------------|---------------------|------------------------|
| **Private Key Protection** | Store seed phrases securely; use dedicated devices | Record seed phrases and store in secure safes; use hardware wallets or dedicated mobile devices for asset management |
| **Risk Awareness** | Remember "there's no free lunch"; be vigilant about phishing | Be cautious of unknown websites requesting wallet connections; verify sources through official channels |
| **Authorization Understanding** | Learn basic concepts of crypto asset authorization | Understand that signing transactions can grant access to your assets; carefully review all signature requests |
| **High-value User Protection** | "Wealth shouldn't be flaunted"; implement asset isolation | Avoid connecting real identity with on-chain assets; separate assets into daily-use and cold storage wallets |

### Special Strategies for High-net-worth Users

Zhou emphasizes that for high-net-worth users, security is fundamentally an asymmetric confrontation. Once targeted, attackers will invest significant resources (social engineering, technical tools) to design attacks based on the target's behavioral patterns, making defense extremely difficult.

In these situations, high-net-worth users should adopt two core strategies:

**Keep wealth private**: Avoid publicizing asset status, especially preventing associations between personal offline identity and on-chain asset identity.

**Asset isolation**: Distribute assets across multiple wallets, using wallets with limited amounts (e.g., under $100,000) for daily operations, while storing large assets in highly secure wallets that are rarely used. When large assets need to be moved, consult security experts to establish strict operational procedures.

## Three Representative Security Incidents

Security incident case studies provide valuable practical experience and lessons. The following table outlines three major security events that Zhou's team directly handled:

| Security Incident | Time | Loss Amount | Attack Type | Key Technical Details | Security Implications |
|------------------|------|-------------|-------------|----------------------|----------------------|
| **Platypus Protocol Attack** | February 2023 | $9 million | Smart contract vulnerability | Attacker's contract contained its own exploitable vulnerability; BlockSec performed first-ever "hack back" to recover $2.4 million | Attackers make mistakes too; security companies can sometimes employ active defense |
| **ParaSpace Protective Rescue** | March 2023 | Potential $5 million | Protective intervention after attack transaction reverted | Attack transaction failed due to insufficient gas but exposed attack vector; security team simulated attack to rescue funds | Need for automated risk response mechanisms; ethical boundaries in security interventions |
| **Bybit $1.5 Billion Loss** | February 2025 | $1.5 billion | Social engineering + trust chain vulnerability | Attackers compromised SAFE wallet developers through social engineering, causing UI display to differ from actual transactions | Multi-signature needs cross-verification; longer trust chains increase risk; critical operations need multi-dimensional confirmation |

### Platypus Protocol Attack and First "Hack Back"

In February 2023, the Platypus lending protocol was attacked, with hackers exploiting a vulnerability to steal approximately $9 million in assets. What made this attack a milestone in security history was the hacker's critical mistake—their attack contract also contained an exploitable vulnerability.

BlockSec's attack detection engine identified this incident immediately. During analysis, the security team not only identified the original attack vulnerability but also discovered the flaw in the attacker's contract. BlockSec collaborated with the project team to develop code exploiting this vulnerability, successfully extracting $2.4 million from the attacker's contract and returning it to the project.

This incident created the first "hack back" case in blockchain security history, demonstrating security companies' innovative response capabilities in specific situations. Notably, BlockSec had no prior relationship with Platypus and quickly established contact via Twitter after the incident, highlighting the importance of emergency response capabilities.

### ParaSpace's Protective Rescue Operation

In March 2023, the ParaSpace protocol, which supports BAYC NFT staking, faced an attack threat. The unique aspect of this case was that BlockSec's system captured a failed but revealing attack transaction—the attacker's transaction was reverted due to insufficient gas, but their intent and method were exposed on-chain.

Facing this situation, BlockSec's team quickly determined that the attacker would likely try again. The security team decided to simulate the attack transaction but replace the profit address with a secure address, preemptively transferring the protocol's $5 million in assets to a secure account before returning them to the project team.

The entire rescue operation took only minutes from discovery to completion, thanks to the company's mature security incident handling process and automated tools. However, this "protective attack" also raised security ethics questions—although intended to protect funds, simulating attack behavior may involve ethical and legal issues.

This experience prompted BlockSec to develop more compliant solutions: helping project teams establish automated risk response mechanisms that can immediately pause protocol operations when attacks occur, protecting user funds while avoiding security ethics risks.

### Bybit's Multi-layer Trust Chain Risk Exposure

In February 2025, Bybit suffered a major security incident resulting in a $1.5 billion loss, the largest single security incident in the crypto security field to date. Unlike the two previous cases based on smart contract vulnerabilities, this attack stemmed from a systemic risk of an "overly long trust chain."

Bybit used a smart contract multi-signature wallet called SAFE to manage assets. The entire security system involved multiple trust points: SAFE wallet developers, operators, interface, and Bybit employees with signature authority. Zhou points out that any security system's strength depends on its weakest link.

The attackers successfully compromised the SAFE wallet development component through social engineering, implanting malicious code in the operating interface. This caused operators to see routine operations on the interface while malicious fund transfer transactions were actually being executed. When Bybit employees signed using hardware wallets, they couldn't detect the discrepancy between the interface display and the actual transaction due to lack of cross-verification mechanisms.

This case reveals a key principle for managing large funds: multi-dimensional cross-verification mechanisms must be established, and no single information source can be relied upon. An independent third-party system verifying operational behavior could have potentially detected and prevented such attacks.

## Social Engineering Attacks and Prevention Strategies

Social engineering attacks exploit human behavioral patterns and psychological vulnerabilities rather than technical flaws. The following table outlines the characteristics and prevention strategies for different types of social engineering attacks:

| Attack Type | Method | Target Vulnerability | Primary Risk Groups | Effective Defense Strategies |
|-------------|--------|---------------------|---------------------|------------------------------|
| **Investment Bait** | Impersonating investment institutions, providing malicious meeting software | Target's professional role and time pressure | Project founders, fund managers | Background verification; use official video tools; don't install unknown software |
| **Identity Impersonation** | Impersonating acquaintances, partners, or official institutions requesting transfers or authorizations | Trust relationships and emergency situations | All users, especially high-net-worth individuals | Establish multi-channel confirmation mechanisms; reject when in doubt; delay processing |
| **Airdrop Phishing** | Claiming reward airdrops, requesting wallet connections or signatures | User greed and expectation of free profits | Regular investors, especially newcomers | Reject unverified airdrops; be cautious with authorizations; verify through official channels |
| **Device Loss** | Physical access to target devices, installing backdoors or transferring assets | Weak physical security awareness, lack of device protection | Asset holders attending offline gatherings | Use dedicated devices for asset management; multi-factor authentication; distributed asset storage |

### Case Study of Social Engineering Attack

Zhou shared his personal experience as BlockSec's CEO with a typical social engineering attack. An attacker impersonating an investment firm sent an investment discussion invitation via company email. After preliminary background checks, both parties scheduled a meeting time.

The critical attack step occurred when the meeting started: the attacker sent a meeting link requiring specific software download and continuously sent urgent emails. This software was actually malicious, designed to steal private keys stored on the computer.

This case perfectly demonstrates the core elements of social engineering attacks: precisely targeting the victim's identity (CEOs frequently participate in investment meetings), exploiting situational pressure (an imminent meeting), providing seemingly reasonable requests (installing meeting software), ultimately guiding the target into dangerous operations.

Notably, such attacks are rarely random but carefully designed for specific high-value targets. By studying the target's social media, public speeches, and work habits, attackers can design highly targeted attack strategies.

### Cross-platform Security Awareness and Protection System

In an increasingly complex crypto ecosystem, users need comprehensive security awareness. When interacting with DeFi protocols, Zhou recommends the following integrated security strategies:

In-depth project background investigation forms the foundation of defense. Before investing, conduct thorough background checks on projects, understanding founder identities (anonymity, historical records), team technical capabilities, and security audit status. Audit reports should come from reputable security companies with confirmation that major security issues have been resolved.

Fund management strategies should follow progressive investment and asset isolation principles. Initially invest small amounts in new projects for testing, gradually increasing after confirming security. High-net-worth users should implement strict asset isolation, storing most assets in cold wallets rarely used, with daily operations limited to hot wallets containing limited funds.

Security tools are essential auxiliary means. Large investors should use professional security monitoring platforms (like BlockSec's Phalcon) to continuously monitor the security status of invested protocols. Regularly use authorization diagnostic tools to check and revoke unused authorizations, especially for inactive or abandoned projects.

Secure transaction habits include:
- Using official websites accessed through bookmarks rather than search engines
- Being skeptical of abnormally high yield promises, maintaining doubt about "too good to be true" offers
- Testing with small amounts before large operations
- Regularly checking authorization status and cleaning unnecessary authorizations

Zhou emphasizes that crypto security isn't a one-time action but continuous habit formation. As attack methods constantly evolve, users must maintain a learning attitude, stay updated on industry security developments, and regularly update their security knowledge and protection tools.

## Comparing Security Risks Across Protocol Types

Within the blockchain ecosystem, different types of protocols present varying security risk profiles. The following table compares decentralized exchanges (DEXs) with other complex financial protocols:

| Security Dimension | DEXs (Decentralized Exchanges) | Complex Financial Protocols (Lending/Yield Farming) |
|-------------------|--------------------------------|---------------------------------------------------|
| **Architectural Complexity** | Relatively simple, based on constant product formula (xy=k), typical core contracts ~500 lines of code | Highly complex, involving multiple logical layers, core contracts typically exceed 5,000 lines |
| **Code Reuse Rate** | High, most based on mature projects like Uniswap | Low, oriented toward original code and innovative mechanisms, original code proportion often exceeds 60% |
| **Fund Flow Model** | "Touch and go," most user funds only present in protocol momentarily during transactions | "Long-term custody," user assets must be stored long-term in protocol to receive services |
| **Governance Complexity** | Simplified governance, low parameter adjustment frequency, clear upgrade paths | Dynamic governance, supporting community voting, frequent parameter adjustments and upgrades |
| **Average Attack Loss** | Approximately $2.8 million/incident | Approximately $12.5 million/incident (lending protocols) |
| **Security Incident Proportion** | ~17% (2023-2025 data) | Over 65% (lending, yield farming, and synthetic asset platforms) |

Historical data shows DEX protocols demonstrate lower vulnerability exploitation rates and fund loss rates, primarily due to structural advantages. DEX core logic is based on automated market maker (AMM) models with clearly defined and thoroughly validated mathematical models, limiting attack surfaces. In contrast, lending and derivative protocols handle more complex financial logic, including asset pricing, collateralization ratio calculations, interest rate models, and liquidation mechanisms, each potentially becoming an attack vector.

Blockchain security expert Zhou Yajin found that code maturity and security show a clear positive correlation. The high code reuse rate in the DEX sector provides significant security advantages—most emerging DEXs directly adopt code from market-tested projects like Uniswap. This "inherited innovation" model allows DEXs to benefit from collective community security audits, significantly reducing the risk of vulnerabilities in original code.

Fund flow model differences also directly impact security risk levels. DEX fund flow characteristics limit both the maximum funds attackers can obtain and shorten the attack window. Conversely, the long-term asset storage nature of lending platforms makes them high-value attack targets, with wider loss scope and larger amounts when security incidents occur.

### DEX-Specific Security Challenges

Despite lower overall risks, DEXs face unique security challenges. BlockSec's security incident analysis reveals three main risk points in the DEX ecosystem:

**Router Contract Authorization Risk**:
Router contracts in the DEX ecosystem connect users with liquidity pools. Users must authorize router contracts to operate their tokens to complete exchanges, making router contracts high-value attack targets. Although router contracts don't store funds themselves, vulnerabilities like permission verification failures could give attackers control over authorized users' assets.

Router contract vulnerabilities have caused serious consequences. In one audit, BlockSec's team discovered a permission verification failure in a prominent DEX's router contract that could have affected over 200,000 users' asset security. Zhou emphasizes that router contract security audits are primary defense elements for DEXs, and fortunately, such vulnerabilities are relatively easy to identify and fix through professional audits.

**Liquidity Manipulation Threats**:
DEX pricing mechanisms rely on relative proportions of assets in liquidity pools, making them vulnerable to liquidity manipulation attacks. Attackers typically obtain large funds through flash loans, significantly changing liquidity pool asset ratios in short periods, manipulating prices for arbitrage profits. While not directly stealing user assets, these attacks cause indirect losses to liquidity providers.

Liquidity manipulation attacks represent design limitations of AMM mechanisms rather than traditional contract vulnerabilities, particularly common in small trading pairs with insufficient liquidity. Advanced DEXs have begun implementing time-weighted average price (TWAP) and multi-oracle confirmation mechanisms to improve resistance, but completely eliminating such risks remains challenging.

**Frontend Security Weaknesses**:
Beyond contract security, DEXs face significant risks from user interface layers. Attackers may direct users to fake interfaces through phishing websites, DNS hijacking, or social media fraud, substituting receiving addresses or modifying transaction parameters during trades to steal user funds.

Interestingly, BlockSec's statistics show over 35% of DEX-related fund losses stem from frontend manipulation rather than contract vulnerabilities, while this proportion is significantly below 15% for other protocol types. This difference reflects DEX contracts' relative security and attackers' trend toward seeking breakthroughs in human-machine interaction aspects.

### Security Strategy Recommendations

The security differences between protocol types provide important practical guidance for investors and project teams. Based on BlockSec's security incident analysis, differentiated protection strategies can be proposed for different protocol types:

For investors, protocol type should be an important consideration in investment decisions. Under the same conditions, DEX-type protocols typically provide higher security guarantees. When investing in complex financial protocols, priority should be given to projects audited by multiple top-tier security companies, with open-source code and longer operational history. Even when using relatively secure DEXs, the following security practices should be observed:

- Revoking unnecessary token authorizations after transactions
- Using official websites rather than search engine or social media links
- Remaining vigilant about abnormally high yield proposals

For project teams, security resources should be allocated according to protocol complexity. Lending and derivative protocols need to invest more resources in comprehensive security audits, continuous attack monitoring, and emergency response mechanisms. DEX-type projects should focus particularly on router contract security and frontend interface protection, while considering implementing price manipulation protection mechanisms.

Zhou especially reminds us that protocol security is an evolving process, with security situations constantly changing as technologies innovate and attack methods advance. Continuous security investment and risk awareness cultivation are essential for the healthy development of the blockchain ecosystem.

## Current State and Future Development of the Blockchain Security Industry

### Industry Scale and Market Structure

According to industry estimates, the blockchain security industry currently has an annual market size of approximately $3 billion, still significantly smaller than the traditional cybersecurity industry's $100 billion scale. This not only reflects the early development stage of blockchain technology applications but also highlights the enormous growth potential and unmet market demand.

From a market structure perspective, blockchain security services show a highly concentrated trend, with leading security audit companies occupying the majority of market share. Even during the 2023-2025 crypto market adjustment period, these leading companies maintained services in high demand, indicating the scarcity and irreplaceability of quality security services. Since the 2022 DeFi Summer peak, the industry's total value locked (TVL) has decreased from $177 billion to $99 billion, yet security demands have actually increased due to asset concentration and attack method sophistication.

### Industry Transformation and Emerging Growth Points

The blockchain security industry is undergoing a critical transformation from "audit-centered" to "full lifecycle security services." This shift stems from the industry's maturing perception of security needs, moving from passive response to proactive defense. The following table outlines the main growth drivers in the blockchain security field:

| Growth Driver | Core Characteristics | Market Potential | Representative Cases |
|---------------|---------------------|------------------|----------------------|
| **Institutional-grade Security Demands** | Traditional financial giants entering require enterprise-level solutions, including compliance frameworks, risk assessment, and real-time monitoring | Annual growth rate expected to exceed 50%, projected to reach $1.2 billion scale by 2026 | Growth in blockchain security investment by financial institutions like JPMorgan, Goldman Sachs |
| **Cross-chain Security Services** | Specialized security solutions for cross-chain bridges and interoperable protocols | Cross-chain attacks accounted for over 37% of total security incident losses in 2024 | Surge in security service demand after Wormhole, Nomad bridge incidents |
| **Compliance-driven Services** | Compliance security needs catalyzed by regulatory framework clarification | Particularly active in Asian and European markets, expected to grow 3x in three years | Compliance security demands brought by Hong Kong VASP licenses, Singapore PSA, and EU MiCA |
| **Personalized Security Tools** | Automated security monitoring services expanding from enterprise to individual users | "Security as a Service" (SaaS) model with compound annual growth rate exceeding 45% | Wallet monitoring, transaction review, and authorization management tools for individual users |

### Core Competitive Moats of Leading Security Companies

In the highly specialized field of blockchain security, leading companies have built multi-level competitive moats that extend beyond technical aspects into brand, talent, and ecosystem dimensions.

Leading blockchain security companies have established first-mover advantages through brand capital and trust networks. After years of market practice and handling key incidents, they've accumulated difficult-to-replicate reputation capital. When project teams select security audit services, they typically prioritize market-validated security companies, creating an obvious Matthew effect. Projects audited by these leading companies gain higher market recognition and user trust, attracting more quality projects and establishing self-reinforcing virtuous cycles.

Technical innovation represents another important competitive moat. Leading security companies no longer satisfy themselves with providing basic audit services but have developed security solutions covering the entire lifecycle of smart contracts. BlockSec's differentiated advantage lies in simultaneously possessing security audit and attack monitoring/blocking capabilities, detecting vulnerabilities before contract deployment while continuously monitoring and protecting asset security during operation. This technological accumulation and innovation capability makes it difficult for new entrants to form effective competition in the short term.

Talent aggregation and knowledge capital constitute the core competitiveness of blockchain security companies. Leading companies have gathered most of the industry's top security researchers—experts who not only possess traditional security backgrounds but also master blockchain technology and smart contract development. Knowledge repositories including attack pattern libraries, vulnerability databases, and security models become companies' core assets, providing continuous technological leadership.

As crypto industry regulation becomes increasingly strict, geopolitical and regulatory coordination capabilities have become new competitive advantages. Regulatory differences across regions create unique market segmentation, with some leading security companies establishing deep cooperation relationships with specific regional regulatory agencies, such as BlockSec's collaboration with Hong Kong's Securities and Futures Commission. Zhou points out that geopolitical factors also influence client choices, with regulatory agencies in Asian financial centers potentially preferring non-U.S. suppliers' products and services.

### Future Trends and Strategic Opportunities

Looking forward, the blockchain security industry will face four key development trends, each containing significant strategic opportunities:

Security and compliance will accelerate integration, no longer remaining separate professional domains but merging into comprehensive solutions. Future blockchain security companies will need to simultaneously master technical security capabilities and regulatory compliance expertise, able to transform regulatory requirements into executable security measures and technical implementations. This trend particularly benefits security companies with cross-domain professional teams.

The "Security as Code" concept will deeply influence smart contract development processes. As blockchain technology matures, security will integrate more closely with every phase of the development lifecycle. Formal verification, composable security modules, and automated security testing will become standard development practices, eliminating security risks from the design stage. Leading security companies are actively developing security tools and services applicable to the development phase, positioning themselves in this emerging market.

On-chain security insurance mechanisms represent innovative fusion between security and finance. Blockchain technology enables security guarantees themselves to be tokenized and smart-contracted, allowing users to purchase security protections through decentralized insurance protocols. Security companies have opportunities to participate in risk assessment, real-time monitoring, and claims verification, creating new revenue models and market spaces.

Multi-layered security ecosystems will gradually form, replacing single-service models. As security challenges become more complex, single companies struggle to solve all security problems. Leading security companies will transform from single service providers to ecosystem builders, integrating specialized security solutions through investment, acquisition, and strategic cooperation to provide comprehensive protection for clients.

As Zhou states, the future development of the blockchain security industry fundamentally depends on the scale and compliance process of the entire blockchain industry. At the current stage, traditional financial institutions' entry represents a critical turning point in the industry's mainstream adoption. These institutions bring not just funds but mature risk management concepts and compliance requirements, driving the entire industry toward more standardized and sustainable development.