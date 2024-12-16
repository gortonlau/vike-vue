import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import { telefunc } from "telefunc/vite";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({}),
    telefunc(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    md({}),
  ],
});
