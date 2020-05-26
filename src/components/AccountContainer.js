import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import PropTypes from "prop-types";

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
  //   this.setState({ transactions: [ ...this.state.transactions, newTrans ] });
  // };

  transactionSubmit = (e) => {
    e.preventDefault();
    let newTransaction = this.sculptSubmit(e);
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
      .then((r) => r.json())
      .then((json) =>
        this.setState({ transactions: [...this.state.transactions, json] })
      );
  };

  searchBar = (e) => {
    this.setState({search: e.target.value})
    // console.log(e.target.value)
  }

  render() {
    return (
      <div>
        <Search changeHandler={this.searchBar} />
        <AddTransactionForm submitHandler={this.transactionSubmit} />
        <TransactionsList trans={this.state.transactions} search={this.state.search} />
      </div>
    );
  }
}

AccountContainer.propTypes = {
  trans: PropTypes.array,
};

export default AccountContainer;
