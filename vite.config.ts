import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [tailwindcss(), tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
  },
  build: {
    cssMinify: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
        },
      },
    },
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 500,
  },
});
