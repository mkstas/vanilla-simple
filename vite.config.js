import checker from 'vite-plugin-checker';
import nunjucks from 'vite-plugin-nunjucks';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  plugins: [
    nunjucks.default(),
    checker({
      typescript: true,
    }),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
};
