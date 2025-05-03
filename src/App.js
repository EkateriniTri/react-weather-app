import React from "react";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Athens" />
      </div>
      <footer div className="Footer">
        This project was coded by{""} Katerina Tri {""}and is {""}{" "}
        <a
          href="https://github.com/EkateriniTri/react-weather-app.git"
          target="_blank"
          rel="noopener noreferrer">
          open-sourced on GitHub
        </a>{" "}
        {""}
        and {""}
        <a
          href="https://kat-react-weather-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer">
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
