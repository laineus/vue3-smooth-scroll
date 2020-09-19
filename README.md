# Vue3 Smooth Scroll
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Vue 3.x](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue3-smooth-scroll.svg)](https://www.npmjs.com/package/vue3-smooth-scroll)
[![npm-downloades](https://img.shields.io/npm/dm/vue3-smooth-scroll.svg)](https://www.npmjs.com/package/vue3-smooth-scroll)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/laineus/vue3-smooth-scroll/blob/master/LICENSE)

Lightweight Vue plugin for smooth-scrolling extended from [vue2-smooth-scroll](https://github.com/Yuliang-Lee/vue2-smooth-scroll).

For simple use-cases, the native [`scroll-behavior` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) (working draft) may be enough.

## Features

- Directive and programmatic API with global and local config overrides
- SSR
- Smooth, non-blocking animation using `requestAnimationFrame` (with fallback)
- Y-axis or vertical scrolling
- Specific scroll containers
- 1.3kB gzipped, 2.9kB min

## Installation

``` bash
npm install --save vue3-smooth-scroll
```

``` js
import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'
const app = createApp(...)
app.use(VueSmoothScroll)
```

## Usage

### Directive
``` html
<a href="#sec-3" v-smooth-scroll>Section 3</a>

<section id="sec-3"></section>
```

### Programmatic

``` js
const myEl = this.$refs.myEl || this.$el || document.getElementById(...)

this.$smoothScroll({
  scrollTo: myEl,
  hash: '#sampleHash'  // required if updateHistory is true
})
```

### Direct in `<script>`

``` html
<body>
  <script src="https://unpkg.com/vue@next"></script>
  <script src="https://unpkg.com/vue3-smooth-scroll"></script>
  <script>
    const app = Vue.createApp(...)
    app.use(VueSmoothScroll.default)
  </script>
</body>
```


## Custom options

### Defaults
``` js
{
  duration: 500,       // animation duration in ms
  offset: 0,           // offset in px from scroll element, can be positive or negative
  container: '',       // selector string or Element for scroll container, default is window
  updateHistory: true  // whether to push hash to history
  easingFunction: null // gives the ability to provide a custom easing function `t => ...`
                       // (see https://gist.github.com/gre/1650294 for examples)
                       // if nothing is given, it will defaults to `easeInOutCubic`
}
```

### Global

``` js
import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(...)
app.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false,
})
```

### Directive:

``` html
<div id="container">
  <a href="#div-id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '#container' }">Anchor</a>

  <div id="div-id"></div>
</div>
```

### Programmatic

``` js
this.$smoothScroll({
  scrollTo: this.$refs.myEl,
  duration: 1000,
  offset: -50,
})
```

## License

[MIT](./LICENSE)
