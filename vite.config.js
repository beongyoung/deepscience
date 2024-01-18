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
        target: "https://api.updatecome.com:8081",
        changeOrigin: true,
        secure: false,
      },
      "/api": {
        target: "https://opendart.fss.or.kr",
        changeOrigin: true,
        secure: false,
      },
      "/v2/top-headlines": {
        target: "https://newsapi.org",
        changeOrigin: true,
        secure: false,
      },
      "/deepscienceObject": {
        target:
          "https://ssproxy.ucloudbiz.olleh.com/v1/AUTH_2197aef3-436e-443d-a060-df0b98a86913",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
