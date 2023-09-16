const javascript = require("../Data/Javascript");
const python = require("../Data/Python");
const html = require("../Data/Html");
const css = require("../Data/Css");
const { sortCSS, sortHTML, sortPython, sortJS } = require("../sortingFunction");

const queryNameRange = (req, res) => {
  let start = 0;
  let end = 85;
  let data = undefined;

  if (req.query.start) {
    start = Number(req.query.start);
  }
  if (req.query.end) {
    end = Number(req.query.end);
  }

  switch (req.query.name) {
    case "javascript":
      data = javascript.sort(sortJS).slice(start - 1, end);
      return res.status(200).json({
        success: true,
        Author: "OlympiaCode - Stephen Omoregie",
        Language: "JavaScript",
        data: data,
      });
      break;

    case "python":
      data = python.sort(sortPython).slice(start - 1, end);
      return res.status(200).json({
        success: true,
        Author: "OlympiaCode - Stephen Omoregie",
        Language: "Python",
        data: data,
      });
      break;

    case "html":
      data = html.sort(sortHTML).slice(start - 1, end);
      return res.status(200).json({
        success: true,
        Author: "OlympiaCode - Stephen Omoregie",
        Language: "HyperText Markup Language",
        data: data,
      });
      break;

    case "css":
      data = css.sort(sortCSS).slice(start - 1, end);
      return res.status(200).json({
        success: true,
        Author: "OlympiaCode - Stephen Omoregie",
        Language: "Cascading Style Sheet",
        data: data,
      });
      break;

    default:
      return res.status(404).json({ success: false, data: [] });
      break;
  }
};

module.exports = queryNameRange;
