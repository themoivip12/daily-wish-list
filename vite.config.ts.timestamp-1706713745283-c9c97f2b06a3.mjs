// vite.config.ts
import { defineConfig } from "file:///E:/plasform-ecomerce/node_modules/vite/dist/node/index.js";
import React from "file:///E:/plasform-ecomerce/node_modules/@vitejs/plugin-react/dist/index.mjs";
import UnoCSS from "file:///E:/plasform-ecomerce/node_modules/unocss/dist/vite.mjs";
import presetAttributify from "file:///E:/plasform-ecomerce/node_modules/@unocss/preset-attributify/dist/index.mjs";
import presetIcons from "file:///E:/plasform-ecomerce/node_modules/@unocss/preset-icons/dist/index.mjs";
import presetUno from "file:///E:/plasform-ecomerce/node_modules/@unocss/preset-uno/dist/index.mjs";
import { resolve } from "path";
var __vite_injected_original_dirname = "E:\\plasform-ecomerce";
var vite_config_default = defineConfig({
  plugins: [
    UnoCSS({
      shortcuts: [
        {
          logo: "i-logos-react w-6em h-6em transform transition-800 hover:rotate-180"
        }
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle"
          }
        })
      ]
    }),
    React()
  ],
  resolve: {
    alias: [
      {
        find: "components",
        replacement: resolve(__vite_injected_original_dirname, "src/components")
      },
      {
        find: "pages",
        replacement: resolve(__vite_injected_original_dirname, "src/app/pages")
      },
      {
        find: "app",
        replacement: resolve(__vite_injected_original_dirname, "src/app")
      },
      {
        find: "store",
        replacement: resolve(__vite_injected_original_dirname, "src/store")
      },
      {
        find: "locales",
        replacement: resolve(__vite_injected_original_dirname, "src/locales")
      },
      {
        find: "types",
        replacement: resolve(__vite_injected_original_dirname, "src/types")
      },
      {
        find: "service",
        replacement: resolve(__vite_injected_original_dirname, "src/service")
      },
      {
        find: "utils",
        replacement: resolve(__vite_injected_original_dirname, "src/utils")
      }
      // Các alias khác...
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxwbGFzZm9ybS1lY29tZXJjZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxccGxhc2Zvcm0tZWNvbWVyY2VcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3BsYXNmb3JtLWVjb21lcmNlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSc7XG5pbXBvcnQgcHJlc2V0QXR0cmlidXRpZnkgZnJvbSAnQHVub2Nzcy9wcmVzZXQtYXR0cmlidXRpZnknO1xuaW1wb3J0IHByZXNldEljb25zIGZyb20gJ0B1bm9jc3MvcHJlc2V0LWljb25zJztcbmltcG9ydCBwcmVzZXRVbm8gZnJvbSAnQHVub2Nzcy9wcmVzZXQtdW5vJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICBVbm9DU1Moe1xuICAgICAgc2hvcnRjdXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsb2dvOiAnaS1sb2dvcy1yZWFjdCB3LTZlbSBoLTZlbSB0cmFuc2Zvcm0gdHJhbnNpdGlvbi04MDAgaG92ZXI6cm90YXRlLTE4MCcsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgcHJlc2V0czogW1xuICAgICAgICBwcmVzZXRVbm8oKSxcbiAgICAgICAgcHJlc2V0QXR0cmlidXRpZnkoKSxcbiAgICAgICAgcHJlc2V0SWNvbnMoe1xuICAgICAgICAgIGV4dHJhUHJvcGVydGllczoge1xuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSksXG4gICAgUmVhY3QoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdjb21wb25lbnRzJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdwYWdlcycsXG4gICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hcHAvcGFnZXMnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdhcHAnLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvYXBwJyksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaW5kOiAnc3RvcmUnLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvc3RvcmUnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdsb2NhbGVzJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2xvY2FsZXMnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICd0eXBlcycsXG4gICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy90eXBlcycpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogJ3NlcnZpY2UnLFxuICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvc2VydmljZScpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZmluZDogJ3V0aWxzJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3V0aWxzJyksXG4gICAgICB9LFxuXG4gICAgICAvLyBDXHUwMEUxYyBhbGlhcyBraFx1MDBFMWMuLi5cbiAgICBdLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtQLFNBQVMsb0JBQW9CO0FBQy9RLE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxlQUFlO0FBQ3RCLFNBQVMsZUFBZTtBQU54QixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUEsUUFDVDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixrQkFBa0I7QUFBQSxRQUNsQixZQUFZO0FBQUEsVUFDVixpQkFBaUI7QUFBQSxZQUNmLFNBQVM7QUFBQSxZQUNULGtCQUFrQjtBQUFBLFVBQ3BCO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDbEQ7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ2pEO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxRQUFRLGtDQUFXLFNBQVM7QUFBQSxNQUMzQztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDN0M7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQy9DO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sYUFBYSxRQUFRLGtDQUFXLFdBQVc7QUFBQSxNQUM3QztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDL0M7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQzdDO0FBQUE7QUFBQSxJQUdGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
