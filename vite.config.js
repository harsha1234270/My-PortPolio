import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  // Replace with your GitHub repository name
  base: "/My-PortPolio/",

  plugins: [react()],

  resolve: {
    alias: {
      react: path.resolve(__dirname, "node_modules/react"),
      "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    },
  },

  server: {
    port: 5173,
    strictPort: true,
  },
});
