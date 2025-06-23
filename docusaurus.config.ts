import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Calvin Lu',
  tagline: 'Life is the journey.',
  favicon: 'img/dossier.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'monkeyboiii',
  projectName: 'monkey-dossier',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', "zh-Hans"],
  },

  // configure multiple instances of blog
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'lifestyle',
        showReadingTime: true,
        editUrl: 'https://github.com/monkeyboiii/monkey-dossier/edit/main/lifestyle/blog',
        blogTitle: 'Lifestyle Blog',
        blogDescription: 'Lifestyle blog for Calvin Lu and his friends',
        blogSidebarCount: 5,
        blogSidebarTitle: 'All experiences',
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        path: 'lifestyle',
        routeBasePath: 'lifestyle/blog',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/learning',
          path: 'learning',
          editUrl: 'https://github.com/monkeyboiii/monkeyboiii/monkey-dossier/edit/main/learning',
        },
        blog: {
          id: 'default',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/monkeyboiii/monkey-dossier/edit/main/blog',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/west-lake.jpg', // Replace with your project's social card
    navbar: {
      title: 'Monkey Dossier',
      logo: {
        alt: 'Monkey Logo',
        src: 'img/monkey.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learningSidebar',
          position: 'left',
          label: 'Learning',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/monkeyboiii/monkey-dossier',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Technical',
          items: [
            {
              label: 'Learning',
              to: '/learning/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/ja2HUH6mMcd',
            },
            {
              label: 'X',
              href: 'https://x.com/calvinlu88',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/monkeyboiii/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Monkey Home. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
