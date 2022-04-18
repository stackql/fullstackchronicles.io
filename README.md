[![pages-build-deployment](https://github.com/stackql/fullstackchronicles.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/stackql/fullstackchronicles.io/actions/workflows/pages/pages-build-deployment)

[![full-stack-chronicles](artwork/png/fullstackchronicles-rect.png)](https://fullstackchronicles.io)

# Full Stack Chronicles

> Full stack design patterns and random musings

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ cd src/
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
cd src
cmd /C 'set "GIT_USER=jeffreyaven" && set "USE_SSH=true" && set "DEPLOYMENT_BRANCH=gh-pages" && set "CURRENT_BRANCH=main" && yarn deploy'
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
