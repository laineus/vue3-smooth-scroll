# Vue3 Smooth Scroll

[![Vue 3.x](https://img.shields.io/badge/Vue-3.x-green.svg?style=for-the-badge)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue3-smooth-scroll.svg?style=for-the-badge)](https://www.npmjs.com/package/vue3-smooth-scroll)
[![license](https://img.shields.io/github/license/laineus/vue3-smooth-scroll.svg?style=for-the-badge&color=blue)](https://github.com/laineus/vue3-smooth-scroll/blob/master/LICENSE)

Lightweight Vue plugin for smooth-scrolling extended from [vue2-smooth-scroll](https://github.com/Yuliang-Lee/vue2-smooth-scroll).

For simple use-cases, the native [`scroll-behavior` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) (working draft) may be enough.

## Features

- Works on Vue 3
- Directive and programmatic API with global and local config overrides
- SSR
- Smooth, non-blocking animation using `requestAnimationFrame` (with fallback)
- Y-axis or vertical scrolling
- Specific scroll containers
- 1.4kB gzipped, 3.1kB min

## Installation

### npm:

``` bash
npm install --save vue3-smooth-scroll
```

``` js
import { createApp } from 'vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(...)
app.use(VueSmoothScroll)
```

### CDN:

``` html
<body>
  <script src="https://unpkg.com/vue@next"></script>
  <script src="https://unpkg.com/vue3-smooth-scroll"></script>
  <script>
    const app = Vue.createApp(...)
    app.use(VueSmoothScroll)
  </script>
</body>
```

## Usage

### Directive:

``` html
<a href="#sec-3" v-smooth-scroll>Section 3</a>

<section id="sec-3"></section>
```

### Programmatic:

``` js
methods: {
  scrollToMyEl () {
    const myEl = this.$refs.myEl || this.$el || document.getElementById(...)

    this.$smoothScroll({
      scrollTo: myEl, // scrollTo is also allowed to be number
      hash: '#sampleHash' // required if updateHistory is true
    })
  }
}
```

### Programmatic (in Vue3 setup): 

``` js
import { inject, ref } from 'vue'
setup () {
  const myEl = ref(null)
  const smoothScroll = inject('smoothScroll')
  const scrollToMyEl = () => {
    smoothScroll({
      scrollTo: myEl.value,
      hash: '#sampleHash'
    })
  }
}
```

## Custom options

### Defaults:

``` js
{
  duration: 500,       // animation duration in ms
  offset: 0,           // offset in px from scroll element, can be positive or negative
  container: '',       // selector string or Element for scroll container, default is window
  updateHistory: true, // whether to push hash to history
  easingFunction: null // gives the ability to provide a custom easing function `t => ...`
                       // (see https://gist.github.com/gre/1650294 for examples)
                       // if nothing is given, it will defaults to `easeInOutCubic`
}
```

### Global:

``` js
const app = createApp(...)
app.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false
})
```

### Directive:

``` html
<div id="container">
  <a href="#div-id" v-smooth-scroll="{ duration: 1000, offset: -50, container: '#container' }">Anchor</a>

  <div id="div-id"></div>
</div>
```

### Programmatic:

``` js
this.$smoothScroll({
  scrollTo: this.$refs.myEl,
  duration: 1000,
  offset: -50,
})
```

### Programmatic (in Vue3 setup):

``` js
const smoothScroll = Vue.inject('smoothScroll')
smoothScroll({
  scrollTo: refs.myEl,
  duration: 1000,
  offset: -50,
})
```

## License

[MIT](./LICENSE)
