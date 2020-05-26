import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const API = "http://localhost:6001/transactions"
class App extends Component {

  constructor() {
    super();
    this.state = {
      transactions: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then((transactions) => this.setState({ transactions }))
  }

 
handleSubmit = (e) => {
  //console.log("hello")
  //this.setState(
}

  render() {

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} handleSubmit = {this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
