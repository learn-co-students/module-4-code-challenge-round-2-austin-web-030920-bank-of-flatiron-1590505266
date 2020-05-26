import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = "http://localhost:6001/transactions";

class AccountContainer extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((r) => r.json())
      .then((json) => this.setState({ transactions: json }));
  }

  sculptSubmit(e) {
    let newTrans = {};
    newTrans.date = e.target.date.value;
    newTrans.description = e.target.description.value;
    newTrans.category = e.target.category.value;
    newTrans.amount = e.target.amount.value;
    return newTrans;
  }

  // transactionSubmit = (e) => {
  //   e.preventDefault();
  //   let newTrans = this.sculptSubmit(e);
  //   this.setState({ transactions: { ...this.state.transactions, newTrans } });
  // };

  transactionSubmit = (e) => {
    e.preventDefault();
    let newTransaction = this.sculptSubmit(e);
    let newGuy;
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((r) => r.json())
      .then((json) => (newGuy = json));
    this.setState({ transactions: { ...this.state.transactions, newGuy } });
  };

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm submitHandler={this.transactionSubmit} />
        <TransactionsList trans={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
