import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KIQR - A Rails 7.1-based saas starter kit",
  description: "Rails SaaS starter kit",
  base: "/",
  srcDir: "src",
  cleanUrls: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "KIQR",
    nav: [{ text: "Documentation", link: "/what-is-kiqr" }],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is KIQR?", link: "/what-is-kiqr" },
          { text: "Getting started", link: "/getting-started" },
        ],
      },
      {
        text: "Features",
        items: [
          { text: "Authentication", link: "/features/authentication" },
          { text: "Accounts", link: "/features/accounts" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/kiqr/kiqr" }],
    search: {
      provider: "algolia",
      options: {
        indexName: "",
        appId: "",
        apiKey: "",
        placeholder: "Search KIQR Docs...",
      },
    },
  },
});
