import React, { Component } from 'react';
// import openSocket from 'socket.io-react';
import openSocket from "socket.io-client";


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
      messages: [],
      input: ""
    };
  }

   socket = openSocket("http://localhost:4000");

   componentDidMount() {

      this.socket.on("connection", (data) => {
       this.setState({
          messages: [ data, ...this.state.messages]
          })
     })

     this.socket.emit("connection");

     this.socket.on("chat", (data) => {
        this.setState({
        messages: [...this.state.messages, data]
      })
    })

  }

  handleSubmit = event => { 
    const body = event.target.value;

    //handling click
    
    if (event.keyCode === 13 && body) {
      this.socket.emit("chat", body)
      this.setState({
        messages: [ ...this.state.messages, this.state.input],
        input: ""})

      event.target.value = "";
    }
  }

  handleClick = event => {
    if (this.state.input) {
    this.socket.emit("chat", this.state.input)
      this.setState({
        messages: [...this.state.messages, this.state.input],
        input: ""})
  }
}

  handleChange = event => {
    this.setState({
      input: event.target.value
    })
  }

render() {


  const message = this.state.messages;
  return (
    <div className="App">
      <Asside />
      <Header />
      <Main message={message} />
      <Button handleSubmit={this.handleSubmit} handleClick={this.handleClick} input={this.state.input} handleChange={this.handleChange}/>
      <Footer />
    </div>
  );
}
}

export default App;
