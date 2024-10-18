import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'SWMP RAG Chatbot',
  favicon: 'img/favicon.ico',

  url: 'https://swmp.eu/',
  baseUrl: '/',

  organizationName: 'SWMP',
  projectName: 'RAG-chat-bot',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'de',
    locales: ['en', 'de'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        src: 'img/logo.svg',
        href: 'https://swmp.eu/',
      },
      items: [
        {
          className: 'button button--lg home',
          position: 'left',
          label: 'Startseite',
          to: '/',
        },
        {
          type: 'dropdown',
          label: 'Anleitung',
          position: 'left',
          items: [
            {
              label: 'Benutzer',
              to: '/docs/Benutzer/introduction',
            },
            {
              label: 'Entwickler',
              to: '/docs/Entwickler/introduction',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: "https://github.com/nmkzzztos/RAG_project",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'App',
              href: 'https://github.com/nmkzzztos/RAG_project',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nmkzzztos/RAG_project',
            }
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'SWMP',
              href: 'https://swmp.eu/',
            },
            {
              label: 'Careers',
              href: 'https://swmp.eu/karriere/',
            },
            {
              label: 'Partners',
              href: 'https://swmp.eu/partner/',
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/swmp-partgmbb?originalSubdomain=de',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/swmp.eu/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC1eslJzZysJItd_CG5bxGKA',
            },
            {
              label: 'Facebook',
              href: 'https://de-de.facebook.com/swmp.eu',
            }
          ],
        },
      ],
      logo: {
        className: 'footer-logo',
        alt: 'SWMP Logo',
        src: 'img/logo.svg',
        width: 150,
        href: 'https://swmp.eu/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} SWMP PartGmbB StBG`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
