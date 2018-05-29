import React, { Component } from 'react';
import './App.css';

import Header from "./Components/header";
import Main from "./Components/main";
import Button from './Components/button';
import Footer from "./Components/footer";
import Asside from "./Components/aside";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Asside/>
          <Header/>
          <Main/>
          <Button/>
          <Footer/>
      </div>
    );
  }
}

export default App;
