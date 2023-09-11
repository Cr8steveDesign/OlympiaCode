// SETUP SERVER EXPRESS.JS

const express = require("express");
const path = require("path");
const process = require("process");
const serveHomePage = require("./Controllers/serveHomepage");
const getFullDataByName = require("./Controllers/getFullDataByName");
const queryNameRange = require("./Controllers/queryNameRange");

// Create instance of express
const app = express();

// Define port
const PORT = 5300;

// Create MiddleWare for Static file access
app.use(express.static(path.resolve(__dirname, "Public")));

// Url Encoding for form data
app.use(express.urlencoded({ extended: false }));

// Availing json for all paths
app.use(express.json());

///////////////////////////////////////////////
// NOW CREATING SERVER AND ROUTING ///////////
//////////////////////////////////////////////

app.get("/", (req, res) => {
  res.status(200).sendFile("./Views/index.html", { root: __dirname });
});

// Code Snippets
// API PAGE - HOW-TO GUIDE
app.get("/code-snippets", (req, res) => {
  res.status(200).sendFile("./Views/code-snippets.html", { root: __dirname });
});

// API PAGE - HOW-TO GUIDE
app.get("/api", (req, res) => {
  res.status(200).sendFile("./Views/api-how-to.html", { root: __dirname });
});

// Route for API Request for JSON Data : url params
app.get("/api/get/:name", getFullDataByName);

// using Query String for name and start-end
app.get("/api/query", queryNameRange);

// Page Not found
app.get("*", (req, res) => {
  res.status(404).sendFile("./Views/404.html", { root: __dirname });
});

/**Start Http methods for server */
// Listening for events on the server
app.listen(5500, () => console.log("Server is running"));

// Controllers
