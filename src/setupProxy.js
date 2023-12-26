import express from "express";
import cors from "cors";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();
app.use(
  cors({ origin: ["https://localhost:5173", "https://deepscience.vercel.app"] })
);
app.use(
  "/v1",
  createProxyMiddleware({
    target: "http://api.updatecome.com:8081/",
    changeOrigin: true,
    secure: false,
    ws: true,
  })
);
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://opendart.fss.or.kr/",
    changeOrigin: true,
    secure: false,
    ws: true,
    cors: true,
  })
);
app.use(
  "/v2",
  createProxyMiddleware({
    target: "https://newsapi.org/",
    changeOrigin: true,
    secure: false,
    ws: true,
    cors: true,
  })
);

export default app;
