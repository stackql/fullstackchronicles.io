const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Cloudy with a chance of Big Data',
  tagline: 'Cloud and data design patterns and random musings',
  url: 'https://cloudywithachanceofbigdata.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cloudywithachanceofbigdata',
  projectName: 'cloudywithachanceofbigdata.github.io',
  trailingSlash: false,
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          editUrl:
            'https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io/tree/main/src/blog',
            blogTitle: 'Cloudy with a chance of Big Data',
            blogDescription: 'Cloud and data design patterns and random musings',
            postsPerPage: 5,
            blogSidebarTitle: 'Recent Posts',
            blogSidebarCount: 10,
            feedOptions: {
              type: 'all',
              title: 'Cloudy with a chance of Big Data Blog Feed',
              description: 'Cloud and data design patterns',
            },
          },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      gtag: {
        trackingID: 'G-4N6KSJ2G0P',
        anonymizeIP: false,
      },       
      navbar: {
        title: 'Cloudy with a chance of Big Data',
        hideOnScroll: true,
        //logo: {
        //  alt: 'Cloudy with a chance of Big Data',
        //  src: 'img/cloud1.svg',
        //},
        items: [
          {to: '/', label: 'Home', position: 'right'}, 
          {
            type: 'dropdown',
            to: 'tags',
            label: 'Topics',
            position: 'right',
            items: [
              {to: 'tags', label: 'All Topics'},
              {to: 'tags/gcp', label: 'Google Cloud Platform'},
              {to: 'tags/aws', label: 'AWS'},
              {to: 'tags/azure', label: 'Azure'},
              {to: 'tags/ci-cd', label: 'CI/CD'},
            ],
          },          
          {to: 'archive', label: 'Archive', position: 'right'},
          {
            href: 'https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          // {
          //  type: 'dropdown',
          //  to: 'authors',
          //  label: 'Authors',
          //  position: 'right',
          //  items: [
          //    {to: 'authors', label: 'Authors'},
          //    {to: 'become-an-author', label: 'Become an Author'},
          //  ],
          // },
          // {to: 'contact-us', label: 'Contact Us', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Blog',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Archive',
                to: 'archive',
              },
              {
                label: 'Tags',
                to: 'tags',
              },                            
            ],
          },
          {
            title: 'Sponsors',
            items: [
              {
                label: 'InfraQL',
                href: 'https://infraql.io/',
              },
              {
                label: 'Gamma Data',
                href: 'https://gammadata.io/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/cloudywithachanceofbigdata/cloudywithachanceofbigdata.github.io',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} Cloudy with a chance of Big Data.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
