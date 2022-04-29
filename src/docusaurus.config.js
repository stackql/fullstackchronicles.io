const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Full Stack Chronicles',
  tagline: 'Full stack design patterns and random musings',
  url: 'https://fullstackchronicles.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'stackql',
  projectName: 'fullstackchronicles.io',
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
            'https://github.com/stackql/fullstackchronicles.io/tree/main/src/blog',
            blogTitle: 'Full Stack Chronicles',
            blogDescription: 'Full stack design patterns and random musings',
            postsPerPage: 5,
            blogSidebarTitle: 'Recent Posts',
            blogSidebarCount: 10,
            feedOptions: {
              type: 'all',
              title: 'Full Stack Chronicles Blog Feed',
              description: 'Full stack design patterns',
            },
          },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
        gtag: {
          trackingID: 'G-0FVDC1E8G6',
          anonymizeIP: false,
        },        
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        additionalLanguages: ['mermaid'],
      },
      announcementBar: {
        id: 'support_us',
        content:
          `<b>If you find our content useful, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/stackql/fullstackchronicles.io">GitHub</a>, if you want to contribute and become an author, submit a PR</b>`,
        backgroundColor: '#A9BCD0',
        textColor: '#1A4E82',
        isCloseable: true,
      },
      algolia: {
        appId: 'MZCGVO503N',
        apiKey: 'd1632c325880eee872b1081d9cde1081',
        indexName: 'cloudywithachanceofbigdata',

        // Optional: see doc section below
        contextualSearch: false,

        // Optional: Algolia search parameters
        // searchParameters: {},
  
        //... other Algolia params
      },
      navbar: {
        title: 'Full Stack Chronicles',
        style: 'primary',
        hideOnScroll: true,
        logo: {
          alt: 'Full Stack Chronicles',
          src: 'img/full-stack-logo-transparent.svg',
        },
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
              {to: 'tags/snowflake', label: 'Snowflake'},
              {to: 'tags/okta', label: 'Okta'},
              {to: 'tags/spark', label: 'Spark'},
              {to: 'tags/kafka', label: 'Kafka'},
              {to: 'tags/ci-cd', label: 'CI/CD'},
            ],
          },          
          {to: 'archive', label: 'Archive', position: 'right'},
          {
            href: 'https://github.com/stackql/fullstackchronicles.io',
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
                label: 'StackQL',
                href: 'https://stackql.io/',
              },
              {
                label: 'Gamma Data',
                href: 'https://gammadata.io/',
              },
              {
                label: 'WindRate',
                href: 'https://www.windrate.com/',
              },              
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/stackql/fullstackchronicles.io',
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
