// vite.config.js
import checker from "file:///D:/Web/pet-projects/vite-simple/node_modules/vite-plugin-checker/dist/esm/main.js";
import nunjucks from "file:///D:/Web/pet-projects/vite-simple/node_modules/vite-plugin-nunjucks/dist/index.js";
import { ViteImageOptimizer } from "file:///D:/Web/pet-projects/vite-simple/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
var vite_config_default = {
  plugins: [
    nunjucks.default(),
    checker({
      typescript: true
    }),
    ViteImageOptimizer({
      png: {
        quality: 80
      },
      jpg: {
        quality: 80
      }
    })
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxXZWJcXFxccGV0LXByb2plY3RzXFxcXHZpdGUtc2ltcGxlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxXZWJcXFxccGV0LXByb2plY3RzXFxcXHZpdGUtc2ltcGxlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9XZWIvcGV0LXByb2plY3RzL3ZpdGUtc2ltcGxlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IGNoZWNrZXIgZnJvbSAndml0ZS1wbHVnaW4tY2hlY2tlcic7XHJcbmltcG9ydCBudW5qdWNrcyBmcm9tICd2aXRlLXBsdWdpbi1udW5qdWNrcyc7XHJcbmltcG9ydCB7IFZpdGVJbWFnZU9wdGltaXplciB9IGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlLW9wdGltaXplcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgbnVuanVja3MuZGVmYXVsdCgpLFxyXG4gICAgY2hlY2tlcih7XHJcbiAgICAgIHR5cGVzY3JpcHQ6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIFZpdGVJbWFnZU9wdGltaXplcih7XHJcbiAgICAgIHBuZzoge1xyXG4gICAgICAgIHF1YWxpdHk6IDgwLFxyXG4gICAgICB9LFxyXG4gICAgICBqcGc6IHtcclxuICAgICAgICBxdWFsaXR5OiA4MCxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn07XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVIsT0FBTyxhQUFhO0FBQzNTLE9BQU8sY0FBYztBQUNyQixTQUFTLDBCQUEwQjtBQUVuQyxJQUFPLHNCQUFRO0FBQUEsRUFDYixTQUFTO0FBQUEsSUFDUCxTQUFTLFFBQVE7QUFBQSxJQUNqQixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsSUFDRCxtQkFBbUI7QUFBQSxNQUNqQixLQUFLO0FBQUEsUUFDSCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsS0FBSztBQUFBLFFBQ0gsU0FBUztBQUFBLE1BQ1g7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
