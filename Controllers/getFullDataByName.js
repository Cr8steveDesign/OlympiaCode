const express = require("express");
const javascript = require("../Data/Javascript");
const python = require("../Data/Python");
const html = require("../Data/Html");
const css = require("../Data/Css");

// This controller is responsible for sending the appropriate
// JSON for any api request with the appropriate data name
// e.g javascript, python, html, css

const getFullDataByName = (req, res) => {
  let urlName = req.params.name.toLowerCase();

  if (urlName === "javascript") {
    return res.status(200).json({ success: true, data: javascript });
  }
  if (urlName === "python") {
    return res.status(200).json({ success: true, data: python });
  }
  if (urlName === "html") {
    return res.status(200).json({ success: true, data: html });
  }
  if (urlName === "css") {
    return res.status(200).json({ success: true, data: css });
  }

  return res.status(404).json({ success: false, data: [] });

  // On success
};

module.exports = getFullDataByName;
