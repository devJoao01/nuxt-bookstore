import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';

const purgeCSS = purgecss({
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js',
    './nuxt.config.js',
    './static/**/*.html',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

export default {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgeCSS] : []),
  ],
};
