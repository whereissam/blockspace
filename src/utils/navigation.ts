// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  // { name: "Products", url: "/products" },
  // { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  // { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Social Media",
    links: [
      { name: "Join Telegram", url: "https://t.me/theblockspaces" },
      { name: "Instagram", url: "https://www.instagram.com/the.blockspace" },
      { name: "X(Twitter)", url: "https://x.com/bungeegumeee" },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/sam-hbz/' },
        { name: 'Github', url: 'https://github.com/whereissam' },
        { name: 'Portaly', url: 'https://portaly.cc/theblockspace' },
        { name: "Substack", url: "https://theblockspace.substack.com/"}
    ],
  },
  // {
  //   section: "Company",
  //   links: [
  //     { name: "About us", url: "#" },
  //     { name: "Blog", url: "/blog" },
  //     { name: "Careers", url: "#" },
  //     { name: "Customers", url: "#" },
  //   ],
  // },
];
// An object of links for social icons
const socialLinks = {
  // facebook: "https://www.facebook.com/",
  x: "https://x.com/bungeegumeee",
  github: "https://github.com/whereissam",
  substack: "https://theblockspace.substack.com/"
  // google: "https://www.google.com/",
  // slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};