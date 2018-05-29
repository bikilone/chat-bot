import React, { Component } from 'react';
import { socketConnect } from 'socket.io-react';
import io from "socket.io-client";


import './App.css';
import Header from "./Components/header";
import Main from "./Components/main";
import Button from './Components/button';
import Footer from "./Components/footer";
import Asside from "./Components/aside";

const socketUrl = "https://git.heroku.com/react-test-task-back.git";




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: ["hi", "hello", "jkdas", "dakl"]
    };
    // this.bla = this.bla.bind(this)
  }

//   componentDidMount() {		
//     const ws = new WebSocket("wss://git.heroku.com/react-test-task-back.git");
//   ws.onopen = function() {
     
//      // Web Socket is connected, send data using send()
//      ws.send("Message to send");
//      alert("Message is sent...");
//   };

//   ws.onmessage = function (evt) { 
//      var received_msg = evt.data;
//      alert("Message is received...");
//   };

//   ws.onclose = function() { 
     
//      // websocket is closed.
//      alert("Connection is closed..."); 
//   };
// }

  
  
  
  
  render() {
    

    const message = this.state.messages;
    return (
      <div className="App">
        <Asside />
        <Header />
        <Main message={message} />
        <Button />
        <Footer />
      </div>
    );
  }
}

export default App;
