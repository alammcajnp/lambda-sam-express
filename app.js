const express = require("express");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Define a route handler with unique parameter names
app.get("/hello", (req, res) =>
  res.send("Hello Alamdeen Siddiqui This is my testing")
);

app.post("/alam", (req, res) => {
  const body = JSON.stringify(req.body);
  let name = `Hello Mr/Ms ${body.name} Your Welcome, Doest not matter Today what is, Matter is that What are you doing today for build yor tomorrow`;

  res.send(name);
});

app.post("/data", (req, res) => {
  const name = req.body.name; // Access the `name` field from the JSON body
  console.log("Received name:", name);
  res.send(`Received name: ${name}`);
});

// Start the server (useful for local testing)
app.listen(3000, () => {
  console.log("App listening on port 3000");
});

// Export the Lambda handler
module.exports.handler = serverless(app);
