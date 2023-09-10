// SETUP SERVER EXPRESS.JS

const express = require("express");
const path = require("path");
const process = require("process");

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

/**Start Http methods for server */
// Listening for events on the server
app.listen(PORT, () => console.log("Server is running"));
