# isInteractiveElement

![build](https://github.com/matijs/is-interactive-element/workflows/build/badge.svg)
[![Version on npm](https://img.shields.io/npm/v/is-interactive-element.svg)](https://www.npmjs.com/package/is-interactive-element)

isInteractiveElement checks if a DOM element is an [interactive element](https://developers.whatwg.org/content-models.html#interactive-content) or not.

## Installation

isInteractiveElement can be installed using [npm](https://npmjs.com):

```bash
$ npm install [--save] is-interactive-element
```

## Example usage

```javascript
if (isInteractiveElement(document.createElement('button'))) {
    // do something you should only do with interactive elements
}
```
