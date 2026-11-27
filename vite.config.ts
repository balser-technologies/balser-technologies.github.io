import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Static site: `npm run build` produces a client bundle, a server bundle and
// prerendered HTML for every route (see scripts/prerender.mjs).
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
