import * as React from "react";
import './App.css';


class App extends React.Component {
  render() {
    return (
    <div className="App">
      <main className="App-content">
        <h3> 
        <a
          className="App-link"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Typescript,
        </a> React and Parcel.
        </h3>
        <p>
          Edit src/App.tsx and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
    );
  }
}

export default App;

