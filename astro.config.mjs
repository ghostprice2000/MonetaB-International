import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://moneta-b-international.vercel.app",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/api/") && !page.includes("/_astro/"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        "https://moneta-b-international.vercel.app/",
        "https://moneta-b-international.vercel.app/services",
        "https://moneta-b-international.vercel.app/services/nettoyage-billets",
        "https://moneta-b-international.vercel.app/services/impression-billets",
        "https://moneta-b-international.vercel.app/services/materiels-produits",
        "https://moneta-b-international.vercel.app/services/consulting-conseils",
        "https://moneta-b-international.vercel.app/a-propos",
        "https://moneta-b-international.vercel.app/expertise",
        "https://moneta-b-international.vercel.app/ressources",
        "https://moneta-b-international.vercel.app/multimedia",
        "https://moneta-b-international.vercel.app/contact",
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
