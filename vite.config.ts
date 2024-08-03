import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    ...configDefaults,
    environment: "jsdom", // Untuk mendukung pengujian yang terkait dengan DOM
  },
});
