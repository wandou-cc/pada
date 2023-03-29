import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://vite.nuxtjs.org/misc/common-issues/#styleresources
  css: ["@/assets/less/index.less","@/assets/css/tailwind.css"],
  typescript: {
    typeCheck: false,
  },
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
  },
  app: {
    pageTransition: { name: "fade", mode: "in-out" },
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()],
      })
    ],
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },

    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/less/var.less";',
        },
      },
    },
  },
});
