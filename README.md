<div align="center">
  <img src="assets/logo.svg" width="80" alt="Wouter — a super-tiny React router (logo by Katya Simacheva)" />
</div>

<br />

<div align="center">
  <a href="https://npmjs.org/package/wouter"><img alt="npm" src="https://img.shields.io/npm/v/wouter.svg?color=black&labelColor=888" /></a>
  <a href="https://travis-ci.org/molefrog/wouter"><img alt="CI" src="https://img.shields.io/github/actions/workflow/status/molefrog/wouter/size.yml?color=black&labelColor=888&label=2.5KB+limit" /></a>
  <a href="https://coveralls.io/github/molefrog/wouter?branch=v3"><img alt="Coverage" src="https://img.shields.io/coveralls/github/molefrog/wouter/v3.svg?color=black&labelColor=888" /></a>
  <a href="https://www.npmjs.com/package/wouter"><img alt="Coverage" src="https://img.shields.io/npm/dm/wouter.svg?color=black&labelColor=888" /></a>
  <a href="https://pr.new/molefrog/wouter"><img alt="Edit in StackBlitz IDE" src="https://img.shields.io/badge/StackBlitz-New%20PR-black?labelColor=888" /></a>
</div>

<div align="center">
  The `slim-react-router` is a minimalistic `react-router` alternative with tiny size and no dependencies.
</div>

## Features

<img src="assets/wouter.svg" align="right" width="250" alt="by Katya Simacheva" />

- Minimum dependencies, only **2.1 KB** gzipped vs 18.7KB
  [React Router](https://github.com/ReactTraining/react-router).
- Supports both **React** and **[Preact](https://preactjs.com/)**! Read
  _["Preact support" section](#preact-support)_ for more details.
- No top-level `<Router />` component, it is **fully optional**.
- Mimics [React Router](https://github.com/ReactTraining/react-router)'s best practices by providing
  familiar **[`Route`](#route-pathpattern-)**, **[`Link`](#link-hrefpath-)**,
  **[`Switch`](#switch-)** and **[`Redirect`](#redirect-topath-)** components.
- Has hook-based API for more granular control over routing (like animations):
  **[`useLocation`](#uselocation-working-with-the-history)**,
  **[`useRoute`](#useroute-route-matching-and-parameters)** and
  **[`useRouter`](#userouter-accessing-the-router-object)**.
