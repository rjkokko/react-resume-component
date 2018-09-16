# react-resume-component

React resume component that can be used as an independent component of React application or as a generator for resumes. See demo folder how to generate resumes.

## Getting started
```bash
npm install --save react-resume-component
```


```jsx
import React from "react";
import ReactDOM from "react-dom";
import Resume from "react-resume-component";
import profileImage from "./profiilikuva-lähempää.jpg";

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
  />,
  document.getElementById("root")
);
```
