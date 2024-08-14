import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/getting-started/",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Intro to Hive",
          href: "/docs/into/into-to-hive/",
        },
        {
          title: "Why choose Hive?",
          href: "/docs/into/why-build-hive/",
          disabled: true,
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Key Features",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Examples",
      items: [
        {
          title: "JavaScript",
          href: "/docs/examples/javascript/",
        },
        {
          title: "Python",
          href: "/docs/examples/python/",
        },
        {
          title: "PHP",
          href: "/docs/examples/php/",
        },
      ],
    },

    {
      title: "Opportunities",
      items: [
        {
          title: "Hive Fund",
          href: "/docs/hive-fund",
          disabled: true,
        },
        {
          title: "Hive Hackathons",
          href: "/docs/hive-hackathons",
          disabled: true,
        },
        {
          title: "Condenser",
          href: "/docs/condenser",
          disabled: true,
        },
        {
          title: "Vision",
          href: "/docs/vision",
          disabled: true,
        },
        {
          title: "ImageHoster",
          href: "/docs/imagehoster",
          disabled: true,
        },
        {
          title: "VideoHoster",
          href: "/docs/videohoster",
          disabled: true,
        },
      ],
    },

    {
      title: "Resources",
      items: [
        {
          title: "Overview",
          href: "/docs/overview",
          disabled: true,
        },
        {
          title: "Whitepaper",
          href: "/docs/whitepaper",
          disabled: true,
        },
        {
          title: "Hivesigner",
          href: "/docs/hivesigner",
          disabled: true,
        },
        {
          title: "HiveKeychain",
          href: "/docs/hivekeychain",
          disabled: true,
        },
        {
          title: "HiveAuth",
          href: "/docs/hiveauth",
          disabled: true,
        },
        {
          title: "Jussi",
          href: "/docs/jussi",
          disabled: true,
        },
        {
          title: "Tools",
          href: "/docs/tools",
          disabled: true,
        },
        {
          title: "Dev support",
          href: "/docs/dev-support",
          disabled: true,
        },
      ],
    },
    {
      title: "Glossary",
      items: [
        {
          title: "Chain Basics",
          href: "/docs/chain-basics",
          disabled: true,
        },
        {
          title: "Governance",
          href: "/docs/governance",
          disabled: true,
        },
        {
          title: "Transactions",
          href: "/docs/transactions",
          disabled: true,
        },
        {
          title: "API",
          href: "/docs/api",
          disabled: true,
        },
        {
          title: "Market",
          href: "/docs/market",
          disabled: true,
        },
      ],
    },
  ],
};
