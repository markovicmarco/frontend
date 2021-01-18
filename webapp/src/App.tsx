import * as React from "react";
import './App.css';

const logo = require("./logo.svg") as string;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Blazing fast zero configuration 
         <code> App</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enjoy learning React
        </a>
      </header>
    </div>
  );
}


export default App;
