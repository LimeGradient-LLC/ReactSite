const express = require("express");
const serverless = require("serverless-http");
const path = require('path')
const {createProxyMiddleware} = require('http-proxy-middleware');
const cors = require('cors')
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

app.use(cors())
app.use(createProxyMiddleware({
  router: (req) => new URL(req.path.substring(1)),
  pathRewrite: (path, req) => (new URL(req.path.substring(1))).pathname,
  changeOrigin: true,
  logLevel: "debug"
}))

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
