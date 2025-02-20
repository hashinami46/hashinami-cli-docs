// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from "prism-react-renderer";

// This runs in Node.js - Don"t use client-side code here (browser APIs, JSX...)

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Hashinami CLI",
  tagline: "にらめっこしましょう、笑うと負けよ、あしゅしゅ！",
  favicon: "img/favicon.ico",
  // staticDirectories: ["static"],
  // Set the production url of your site here
  url: "https://hashinami46.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often "/<projectName>/"
  baseUrl: "/hashinami-cli-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hashinami46", // Usually your GitHub org/user name.
  projectName: "hashinami-cli-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
	        lastVersion: "current",
          versions: {
            current: {
              label: "Latest",
            },
          },
          sidebarPath: "./sidebars.js",
          // routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      // Replace with your project"s social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Hashinami CLI",
        logo: {
          alt: "Hashinami CLI",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            label: "Docs",
            position: "left",
          },
          /*
          {
	          to: "/blog", 
	          label: "Blog",
	          position: "left"
          },
          */
          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
          },
          {
            href: "https://github.com/hashinami46/hashinami-cli",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
	        {
		        title: "Learn",
		        items: [
			        {
				        label: "Introduction",
				        to: "/docs/intro"
			        },
			        {
				        label: "Installation",
				        to: "/docs/installation"
			        },
			      ]
	        },
	        /*
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
            ],
          },
          */
          {
            title: "More",
            items: [
	            /*
              {
                label: "Blog",
                to: "/blog",
              },
              */
              {
                label: "GitHub",
                href: "https://github.com/hashinami46/hashinami-cli",
              },
              {
                label: "NPM",
                href: "https://www.npmjs.com/package/hashinami-cli",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hashinami App. Made with ♥️ by Hashinami.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
