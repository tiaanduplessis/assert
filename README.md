
<h1 align="center">@tiaanduplessis/assert</h1>
<div align="center">
  <strong>The most basic assertion library</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/@tiaanduplessis/assert">
    <img src="https://img.shields.io/npm/v/@tiaanduplessis/assert.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/@tiaanduplessis/assert">
  <img src="https://img.shields.io/npm/dm/@tiaanduplessis/assert.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/assert">
    <img src="https://img.shields.io/travis/tiaanduplessis/assert.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/assert/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/assert.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/assert/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/assert.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/@tiaanduplessis/assert/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/assert.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20@tiaanduplessis/assert!%20https://github.com/tiaanduplessis/assert%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/assert.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/assert/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/assert.svg)](https://greenkeeper.io/)

```sh
$ npm install @tiaanduplessis/assert
# OR
$ yarn add @tiaanduplessis/assert
```

## Usage

```js
import {ok, type} from '@tiaanduplessis/assert'

ok(true, 'Happy')
ok(false, 'Not Happy') // throws
type(5, 'number', 'Happy')
type(() => {}, 'function', 'Still Happy')
type(false, 'string', 'Not Happy')

```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/@tiaanduplessis/assert/issues).

## License

Licensed under the MIT License.
