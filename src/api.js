const express = require("express");
const serverless = require("serverless-http");
const path = require('path')
const {createProxyMiddleware, fixRequestBody, responseInterceptor} = require('http-proxy-middleware');
const url = require('url')

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "hi!"
  });
});

router.get("/secure", (req, res) => {
  res.sendFile(path.join(__dirname + "secure.html"))
})

router.get('/proxy', createProxyMiddleware({
  target: "https://discord.com/",
  changeOrigin: true,
}))
app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
