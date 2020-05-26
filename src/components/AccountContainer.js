import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = "http://localhost:6001/transactions";

class AccountContainer extends Component {
  constructor(){
    super();
    this.state = {
      transactions: []
    }
  }

  componentDidMount(){
    fetch(URL).then(r => r.json()).then(json => this.setState({transactions: json}))
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList trans={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
