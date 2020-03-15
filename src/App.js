import React from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from './logo.svg';//「logo.svg」の画像を{logo}に入れる
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
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
        <Footer />
      </header>
    </div>
  );
}

export default App;
