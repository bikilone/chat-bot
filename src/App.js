import React, { Component } from 'react';
import './App.css';

import Header from "./Components/header";
import Main from "./Components/main";
import Button from './Components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Button/>
      </div>
    );
  }
}

export default App;
