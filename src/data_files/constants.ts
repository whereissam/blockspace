import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Blockspace",
  tagline: "Blockchain media",
  description: "Blockspace is your premier source for blockchain news, insights, and analysis. We deliver comprehensive coverage of cryptocurrency, DeFi, Web3, and emerging blockchain technologies to keep you informed and ahead of the curve.",
  description_short: "Your premier source for blockchain news, insights, and analysis.",
  url: "https://blockspaces.xyz", // Adjust this to your actual domain
  author: "Sam",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Blockchain News & Analysis`,
  description: "Stay ahead of the blockchain curve with Blockspace. Get expert insights on cryptocurrency, DeFi, NFTs, and Web3 technologies. Your trusted source for comprehensive blockchain media coverage and analysis.",
  image: ogImageSrc,
};