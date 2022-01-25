import React from 'react';
import logo from './logo.svg';

function Header({myname}) {
    return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> 
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React with {myname}
    </a>
  </header>;
}

export default Header;