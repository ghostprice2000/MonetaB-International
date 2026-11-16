import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://monetabinternational.com",
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/api/") && !page.includes("/_astro/"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        "https://monetabinternational.com/",
        "https://monetabinternational.com/services",
        "https://monetabinternational.com/services/nettoyage-billets",
        "https://monetabinternational.com/services/impression-billets",
        "https://monetabinternational.com/services/materiels-produits",
        "https://monetabinternational.com/services/consulting-conseils",
        "https://monetabinternational.com/a-propos",
        "https://monetabinternational.com/expertise",
        "https://monetabinternational.com/ressources",
        "https://monetabinternational.com/multimedia",
        "https://monetabinternational.com/contact",
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
