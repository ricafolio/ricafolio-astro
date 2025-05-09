import type { ProjectType } from "../types"

export const client_projects: ProjectType[] = [
  {
    img_file_name: "chef",
    label: {
      text: "Front-end Project",
      color: "lime",
    },
    title: "Chef",
    description: "Responsive landing page for a chrome extension",
    tools: [
      {
        id: "html",
        name: "HTML",
      },
      {
        id: "css",
        name: "CSS",
      },
      {
        id: "jquery",
        name: "jQuery",
      },
      {
        id: "jekyll",
        name: "jekyll",
      },
    ],
    url: "https://usechef.com/",
    url_text: "View project",
    github_url: null,
  },
  {
    img_file_name: "wenmint",
    label: {
      text: "[Offline] Full Stack Project",
      color: "red",
    },
    title: "Wenmint.io",
    description: "A community to keep track of upcoming NFT launch dates",
    tools: [
      {
        id: "nuxt",
        name: "Nuxt.js",
      },
      {
        id: "discordapi",
        name: "Discord API",
      },
      {
        id: "twitterapi",
        name: "Twitter API",
      },
      {
        id: "seo",
        name: "SEO",
      },
    ],
    url: "https://web.archive.org/web/20221207025634/https://wenmint.io/",
    url_text: "View archived page",
    github_url: null,
  },
  {
    img_file_name: "bot",
    label: {
      text: "[Offline] Bot Project",
      color: "red",
    },
    title: "Premint Links Discord Bot",
    description:
      "A bot used by over 300 discord servers that extracts the most recent premint links shared on Twitter.",
    tools: [
      {
        id: "discordapi",
        name: "Discord API",
      },
      {
        id: "twitterapi",
        name: "Twitter API",
      },
      {
        id: "node",
        name: "Node.js",
      },
    ],
    url: "https://top.gg/bot/1006311461175443526",
    url_text: "View archived page",
    github_url: null,
  },
  {
    img_file_name: "cult",
    label: {
      text: "[Offline] Full Stack Project",
      color: "red",
    },
    title: "NFT Referral",
    description:
      "An alt-resistant referral campaign implemented for an NFT project, attracting 23,000 registrations in just three days.",
    tools: [
      {
        id: "nuxt",
        name: "Nuxt.js",
      },
      {
        id: "strapi",
        name: "Strapi",
      },
      {
        id: "twitterapi",
        name: "Twitter OAuth",
      },
    ],
    url: "https://twitter.com/search?q=cultofeth.xyz&src=typed_query&f=live",
    url_text: "View campaign results",
    github_url: null,
  },
]
