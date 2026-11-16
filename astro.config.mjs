import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://monetalab-international.example",
  vite: {
    plugins: [tailwindcss()],
  },
});
