const Typography = require("typography");
const fs = require("fs");

let typography = new Typography({
  baseFontSize: "13px",
  // baseLineHeight: 1.666,
  headerFontFamily: [
    "Avenir Next",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Georgia", "serif"],
  scaleRatio: 2
});
fs.writeFile("../src/typographyjs.css", typography.toString(), function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
});