// import animalImg from "./content/quokka.jpg"; 

// const imgElem = document.createElement("img");
// imgElem.src = animalImg;

// document.getElementById("imgContainer").appendChild(imgElem);


import React from "react";
import ReactDOM from "react-dom";
import { AverageComponent } from "./components/averageComponent";

ReactDOM.render(
  <div>
    <h1>Hello from React DOM</h1>
    <AverageComponent />   
  </div>,
  document.getElementById("root")
);

