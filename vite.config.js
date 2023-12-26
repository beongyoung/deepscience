import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: resolve("src") }],
  },
  server: {
    proxy: {
      "/v1": {
        target: "http://api.updatecome.com:8081/",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/api": {
        target: "https://opendart.fss.or.kr/",
        changeOrigin: true,
        secure: false,
        ws: true,
        cors: true,
      },
      "/v2": {
        target: "https://newsapi.org/",
        changeOrigin: true,
        secure: false,
        ws: true,
        cors: true,
      },
    },
  },
});
