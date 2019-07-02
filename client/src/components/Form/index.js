import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const name = event.target.name;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //grabbing user info from state
    const inputs = this.state;
    const options = {
    headers: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(inputs),
    }
    fetch(`http://localhost:3001/api/login`, options)
    .then(res => res.json())
    .then(res => console.log(res));
     this.clearForm(); 
     window.location.href = './'; 
  };



  clearForm = () => {
    this.setState({
      firstName: "",
      lastName: ""
    });
  }

  render() {
    return (
      <div>
        <p>
          Hello {this.state.username}
        </p>
        <form className="form">
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <a href="/">Return to the homepage</a>
      </div>
    );
  }
}

export default Form;
