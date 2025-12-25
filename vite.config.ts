import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@slides": "/src/slides",
      "@css": "/src/css",
      "@components": "/src/components",
    },
  },
});
