const express = require('express');
const app = express();
const PORT = 8080;
const {createProxyMiddleware} = require("http-proxy-middleware");


// Proxy: de /api hacia tu servidor HTTP
app.use("/", createProxyMiddleware({
  target: "http://181.30.35.22:6379", // tu backend HTTP
  changeOrigin: true,
}));


// Start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});