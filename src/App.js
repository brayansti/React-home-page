import React from 'react';
import senaLogo from './img/logoSena.png';
import './App.css';

function App() {
  return (
    
    <div className="App">

      <article className="mainHome">
        <div className="mainHome__bg"></div>
        <div className="mainHome__content">
          <div className="mainHome__title">
            <h1>
              <p>This </p>
              <p>is </p>
              <p>the </p>
              <p>end </p>
            </h1>
            <img src={senaLogo} alt="Logo Sena" />
          </div>
        </div>
      </article>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
