import http from "http";
import { serveStatic } from "./utils/serveStatic.js";
import fs from "node:fs";
import { getData } from "./utils/getData.js";
import { handelGet, HandelPost } from "./handlers/routeHandlers.js";

const PORT = 8000;

const __dirname = import.meta.dirname;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api") {
    if (req.method === "GET") {
      return await handelGet(res);
    }
    else if (req.method === "POST") {
      HandelPost(req,res)
    }
  } else if (!req.url.startsWith("/api")) {
    return await serveStatic(req, res, __dirname);
  }
});

server.listen(PORT, () => console.log(`console running on the port ${PORT}`));
