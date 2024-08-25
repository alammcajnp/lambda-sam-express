const express = require("express");
const serverless = require("serverless-http");
const app = express();
app.get("/hello", (res, res) => res.send("Hello Alamdeen Siddiqui"));
app.listen(3000, () => {
  console.log("App listning port of 3000");
});
module.exports.handler = serverless(app);
