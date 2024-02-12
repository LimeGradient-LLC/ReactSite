const express = require("express");
const serverless = require("serverless-http");
const path = require('path')
const proxy = require('express-http-proxy');

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

router.get("/encrypt", proxy('www.discord.com'))

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
