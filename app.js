const express = require("express");
const serverless = require("serverless-http");
const app = express();

// Define a route handler with unique parameter names
app.get("/hello", (req, res) =>
  res.send("Hello Alamdeen Siddiqui This is my testing")
);

// Start the server (useful for local testing)
app.listen(3000, () => {
  console.log("App listening on port 3000");
});

// Export the Lambda handler
module.exports.handler = serverless(app);
