import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Resume from "react-resume-component";
import registerServiceWorker from "./registerServiceWorker";
import profileImage from "./profiilikuva-lähempää.jpg";
import Typography from "typography";

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
typography.injectStyles();

ReactDOM.render(
  <Resume
    name="Jussi Koskela"
    firstName="Jussi"
    tel="+358 xx xx xxxx"
    email="jussi.koskela@example.com"
    address="Urjala, Finland"
    linkedInAccount="@example"
    githubAccount="@example"
    profileImage={profileImage}
    summary="Alussa olivat suo, kuokka – ja Jussi."
    profession="Farmer"
    skills={[
      { name: "Äestäminen", level: 3 },
      { name: "Puinti", level: 4 },
      {name: "Kulottaminen", level: 5},
      { name: "Ahkeruus", level: 5 },
      { name: "Yrittelijäisyys", level: 5 }
    ]}
    experiences={[
      {
        company: "Koskelan maatila",
        period: "1910-1950",
        title: "CEO",
        description: (
          <div>
            <p>
              Suo oli autio, keskeltä melkein puuton neva, jonka veden
              vaivaamasta kamarasta nousi vain jokin kitukasvuinen käkkyrämänty,
              vahvakaarnainen ja tasalatvainen pieni vanhus. Jussi liikkui
              suolla, pysähdellen, katsellen, tarkkaillen ja arvioiden. Hän otti
              seipään, tarkasti huolellisesti että näkijöitä ei ollut, ja kaivoi
              sitten sillä kuopan suon pintaan.
            </p>
          </div>
        )
      }
    ]}
    education={[
      {
        school: "Isän maatila",
        department: "apupoika",
        degree: "Maanviljelijä",
        period: "1895-1900"
      }
    ]}
    miscSection={(<p className="description" style={{"position":"absolute", bottom: "0em", fontSize:"8px"}}>This resume was made with Riku Kokko's react-resume-component.<a href="https://github.com/rjkokko/react-resume-component.git"> github.com/rjkokko/react-resume-component</a></p>)}
  />,
  document.getElementById("root")
);
registerServiceWorker();
