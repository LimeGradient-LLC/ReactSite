const express = require("express");
const serverless = require("serverless-http");
const path = require('path')
const proxy = require('express-http-proxy');
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

router.get("/encrypt", (req, res) => {
  proxy("www.discord.com", {proxyReqPathResolver: req => url.parse(req.baseUrl).path})
})

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
