# isInteractiveElement

[![Build Status](https://travis-ci.org/matijs/is-interactive-element.svg?branch=master)](https://travis-ci.org/matijs/is-interactive-element)
[![Version on npm](https://img.shields.io/npm/v/is-interactive-element.svg)](https://js.com/package/is-interactive-element)

isInteractiveElement checks if a DOM element is an [interactive element](https://developers.whatwg.org/content-models.html#interactive-content) or not.

## Example usage

```javascript
if ( isInteractiveElement( document.createElement( 'button' ) ) ) {
  // do something you should only do with interactive elements
}
```

## Installation

isInteractiveElement can be installed using [npm](https://npmjs.com):

```bash
$ npm install [--save] is-interactive-element
```

