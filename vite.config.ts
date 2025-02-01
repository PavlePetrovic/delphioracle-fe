import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true, // Makes sure it's treated as an icon, with smaller size
        svgo: false, // Optional, depending on whether you want to optimize SVGs
        titleProp: true, // Optional, allows title prop for SVGs
      },
      include: "**/*.svg", // Ensures the plugin processes all SVG files
    }),
  ],
  server: {
    port: 3000, // Dev server port
    open: true, // Auto opens in browser
  },
  build: {
    outDir: "dist", // Output directory for production build
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@router": path.resolve(__dirname, "src/router"),
      "@common": path.resolve(__dirname, "src/common"),
      "@views": path.resolve(__dirname, "src/views"),
      "@features": path.resolve(__dirname, "src/views/features"),
      "@components": path.resolve(__dirname, "src/views/components"),
    },
  },
});
