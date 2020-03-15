# eslint-plugin-document-write

ESLint plugin to disallow document.write[ln]()

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
