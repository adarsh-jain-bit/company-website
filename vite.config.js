

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as url from "url";
import path from "path";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss() ],
  resolve: {
    alias: {
      "@": path.resolve(url.fileURLToPath(new URL(".", import.meta.url)), "src"),
    },
  },
});
