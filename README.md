# eslint-plugin-document-write
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fphanect%2Feslint-plugin-document-write.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fphanect%2Feslint-plugin-document-write?ref=badge_shield)


ESLint plugin to disallow `document.write()` and `document.writeln()`.

## Install

```bash
$ npm install --save-dev eslint eslint-plugin-document-write
```

or

```bash
$ yarn add --dev eslint eslint-plugin-document-write
```

## Usage

Like other ESLint plugins,

- add `document-write/no-document-write` in the `rules`.
- add `"document-write"` in the `plugins`.

```json
{
  // ...
  "rules": {
    "document-write/no-document-write": "error"
  },
  "plugins": [ "document-write" ]
}
```

## Why

There are a lot of limitation in `document.write()` and `document.writeln()` in recent browsers.
For example, you cannot use `document.write()` and `document.writeln()`in deferred (`<script defer ...>`) and asynchronous (`<script async ...>`) scripts.
See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/write#Notes) for other limitations.

## License

[MIT](http://vjpr.mit-license.org)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fphanect%2Feslint-plugin-document-write.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fphanect%2Feslint-plugin-document-write?ref=badge_large)