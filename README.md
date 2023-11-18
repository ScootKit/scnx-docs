# SCNX Documentation

Welcome to the SCNX documentation - you can view the result of this repo [here](https://docs.scnx.xyz). The goal of this
project is to cover as many features as possible in an easy-to-use documentation to allow new and existing users to use
SCNX more easily.

## Contribute

You are more than welcome to contribute to our documentation. To do so,
please [create PRs](https://github.com/ScootKit/scnx-docs/pulls). We highly suggest creating
an [issue](https://github.com/ScootKit/scnx-docs/issues)
or [discussions](https://github.com/ScootKit/scnx-docs/discussions) first in order to communicate who is working on
what.

## Scripts

Execute all scripts inside the `bin` directory.

* Do avoid having to re-fetch data on every render, you can execute `node download-api-responses.js`. This will create
  a `api-responses.json` file that acts as a cache for SCN API Resources. This is required for all other scripts.
* Run `node generate-progress.js` to view module translation progress. Include an argument (SCNX Org ID) to hide modules
  that were not created by your organization. Items will be sorted based on their usage count.
* Run `node generate-docs-file.js <moduleName>` to generate a template for a documentation file of a custom bot module.
* Run `node generate-missing-files.js` to generate WIP files for modules that are missing in the documentation.

## Development

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.


---
© ScootKit, 2023 - All rights reserved.
