import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'Documentation',
  favicon: 'img/logo_mini.svg',

  url: 'https://swmp-partgmbb.github.io',
  baseUrl: '/swmp-docs',

  organizationName: 'swmp-partgmbb.github.io',
  projectName: 'swmp-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
            'https://github.com/swmp-partgmbb/swmp-docs/blob/main',
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
    // algolia: {
    //   appId: '4DFW8LS9R2',
    //   apiKey: 'c484b7c9b5712b904af2aaf3788606af',
    //   indexName: 'swmp-docs',

    //   contextualSearch: true,
    //   externalUrlRegex: 'swmp-partgmbb\\.github\\.io',

    //   replaceSearchResultPathname: {
    //     from: '/docs/',
    //     to: '/',
    //   },

    //   searchPagePath: 'search',

    //   insights: false,
    // },
    image: 'img/logo.svg',
    navbar: {
      logo: {
        src: 'img/logo.svg', 
        href: '/',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Docs',
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
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
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
              href: 'https://ambitious-meadow-029586f03.5.azurestaticapps.net/',
            },
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
        src: 'img/logo_swmp.svg',
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
