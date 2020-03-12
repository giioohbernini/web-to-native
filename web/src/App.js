import React from 'react';
import logo from './logo.svg';
import './App.css';
import isApp from 'utils/isApp';

const welcomeType = isApp ? 'Aplicativo' : 'Web';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World - {welcomeType}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
