import { createProxyMiddleware } from "http-proxy-middleware";

export default function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://opendart.fss.or.kr",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/v2", {
      target: "https://newsapi.org",
      changeOrigin: true,
    })
  );
}
