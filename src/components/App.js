import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
import Search from './Search'

const API = "http://localhost:6001/transactions"
class App extends Component {

  constructor() {
    super();
    this.state = {
      transactions: [],
      searchDesc: ''
      
    };
  }


  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then((transactions) => this.setState({ transactions }))
  }

 
addTransaction = transaction => {
  this.setState({transactions: [...this.state.transactions, transaction]})
}

handleSearch = (e) => {
  this.setState({ searchDesc: e.target.value })
  //console.log(e.target.value)
  
}


  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={this.state.transactions} addTransaction = {this.addTransaction} searchTerm = {this.state.searchDesc}/>
        <Search onChange={this.handleSearch} />
      </div>
    );
  }
}

export default App;
