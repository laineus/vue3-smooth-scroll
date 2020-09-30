import Vue, { PluginFunction } from "vue";

// augment typings of Vue.js
import "./vue-injections";

export interface SmoothScrollOptions {
  scrollTo: Element | number;
  duration?: number;
  offset?: number;
  container?: Element | string;
  updateHistory?: boolean;
  hash?: string; // required if updateHistory is true
}

declare const Vue3SmoothScroll: PluginFunction<SmoothScrollOptions>;

export default Vue3SmoothScroll;
