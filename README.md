# progress-bar [![Verified on Openbase](https://badges.openbase.com/js/verified/@uiuxarghya/progress-bar.svg?style=openbase)](https://openbase.com/js/@uiuxarghya/progress-bar?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)  [![tests](https://github.com/uiuxarghya/progress-bar/workflows/tests/badge.svg)](https://github.com/uiuxarghya/progress-bar/actions?query=workflow%3Atests) [![npm](https://img.shields.io/npm/v/@uiuxarghya/progress-bar.svg)](https://www.npmjs.com/package/@uiuxarghya/progress-bar) [![jsdeliver hits](https://data.jsdelivr.com/v1/package/npm/@uiuxarghya/progress-bar/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@uiuxarghya/progress-bar) [![Featured on Openbase](https://badges.openbase.com/js/featured/@uiuxarghya/progress-bar.svg?style=openbase)](https://openbase.com/js/@uiuxarghya/progress-bar?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

A small, easy &amp; zero-dependency progress bar component.

![Progress Bar Demo](https://raw.githubusercontent.com/uiuxarghya/progress-bar/main/.github/progress-bar-demo.gif)

## Features

- **Zero dependencies**: Also not tied to any framework in particular.
- **Small size**: < 500 bytes with Brotli (< 600 bytes gzipped).
- **Easy to use**: Just a couple of lines and off you go. And TypeScript types are now available as well!

## Installation

```sh
$ npm i @uiuxarghya/progress-bar

# OR

$ yarn add @uiuxarghya/progress-bar

```

## Usage

Import the package and create a progress bar instance:

```js
import ProgressBar from '@uiuxarghya/progress-bar';

const progress = new ProgressBar();
```

Show the progress bar and begin animating it by calling the `.start()` method:

```js
progress.start();
```

End the progress bar animation by calling the `.finish()` method:

```js
setTimeout(() => {
  progress.finish();
}, 1000);
```

You can reuse a `progress` instance multiple times - every time `.start()` gets called the progress bar starts animation from scratch.

## Customization

The progress bar's appearance and behavior can be (slightly) customized with constructor parameters. Here are the different options and their default values:

```js
const progress = new ProgressBar({
  // The size (height) of the progress bar.
  // Numeric values get converted to px.
  size: 2,

  // Color of the progress bar.
  // Also used for the glow around the bar.
  color: '#0cf',

  // Class name used for the progress bar element.
  className: 'progress-bar',

  // How many milliseconds to wait before the progress bar
  // animation starts after calling .start().
  delay: 80,
});
```

## License

This library is licensed under the MIT license. See [LICENSE](./LICENSE).
