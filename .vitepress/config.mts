import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "KIQR - A Rails 7.1-based saas starter kit",
  description: "Rails SaaS starter kit",
  base: "/",
  srcDir: "src",
  lastUpdated: true,
  cleanUrls: false,
  ignoreDeadLinks: [
    // ignore exact url "/playground"
    "/playground",
    // ignore all localhost links
    /^https?:\/\/localhost/,
    // ignore all links include "/repl/""
    /\/repl\//,
    // custom function, ignore all links include "ignore"
    (url) => {
      return url.toLowerCase().includes("ignore");
    },
  ],
  head: [],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "KIQR",
    nav: [
      { text: "Guide", link: "/guide/what-is-kiqr.html" },
      { text: "Reference", link: "/reference/app-config.html" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Introduction",
          items: [
            { text: "What is KIQR?", link: "/guide/what-is-kiqr" },
            { text: "Screenshots", link: "/guide/screenshots" },
            { text: "Getting started", link: "/guide/getting-started" },
          ],
        },
        {
          text: "Features",
          items: [
            { text: "Authentication", link: "/guide/features/authentication" },
            { text: "Accounts", link: "/guide/features/accounts" },
            { text: "Team invitations", link: "/guide/features/invitations" },
          ],
        },
        {
          text: "Config & API Reference",
          link: "/reference/app-config",
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "Application config", link: "/reference/app-config" },
            {
              text: "Accounts",
              items: [
                {
                  text: "Create",
                  link: "/reference/services/accounts/create",
                },
                {
                  text: "Update",
                  link: "/reference/services/accounts/update",
                },
              ],
            },
          ],
        },
      ],
    },

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
