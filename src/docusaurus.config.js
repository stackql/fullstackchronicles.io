const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Cloudy with a chance of Big Data',
  tagline: 'Cloud and data design patterns and random musings',
  url: 'https://cloudywithachanceofbigdata.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook',
  projectName: 'docusaurus',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
            blogTitle: 'Cloudy with a chance of Big Data',
            blogDescription: 'Cloud and data design patterns',
            postsPerPage: 5,
            blogSidebarTitle: 'All posts',
            blogSidebarCount: 'ALL',
            feedOptions: {
              type: 'all',
              title: 'Cloudy with a chance of Big Data Blog Feed',
              description: 'Cloud and data design patterns',
              //copyright: `Copyright © ${new Date().getFullYear()} InfraQL Technologies Pty Ltd`,
            },
          },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Cloudy with a chance of Big Data',
        hideOnScroll: true,
        logo: {
          alt: 'Cloudy with a chance of Big Data',
          src: 'img/cloud1.svg',
        },
        items: [
          {
            type: 'dropdown',
            to: 'authors',
            label: 'Authors',
            position: 'right',
            items: [
              {to: 'authors', label: 'Authors'},
              {to: 'become-an-author', label: 'Become an Author'},
            ],
          },
          {to: 'contact-us', label: 'Contact Us', position: 'right'},        
          // {
         //   type: 'doc',
         //   docId: 'authors',
         //   position: 'left',
         //   label: 'Authors',
         // },
         // {to: '/blog', label: 'Blog', position: 'left'},
          //{
          //  href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
          //  position: 'right',
          //},
          {
            href: 'https://github.com/infraql',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
