import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

URL = `http://localhost:6001/transactions`
class AccountContainer extends Component {

  constructor() {
    super();
    this.state = {
      transactions: [],
      dateValue: '',
      descValue: '',
      catValue: '',
      amountValue: ''
    }
  }

  componentDidMount() {
    this.getTransactions()
    console.log("skldfjlksdj")
  }

  handleDate = event => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ dateValue: event.target.value })
  }

  handleDesc = event => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ descValue: event.target.value })
  }

  handleCat = event => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ catValue: event.target.value })
  }

  handleAmount = event => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ amountValue: event.target.value })
  }

  addTransaction = event => {
    event.preventDefault()
    console.log(event.target.value)
    let newFormInfo = {dateValue: this.state.dateValue, descValue: this.state.descValue, catValue: this.state.catValue, amountValue: this.state.amountValue}
    let newInfo = ({ transactions: this.state.transactions.concat(newFormInfo) });

    fetch(URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        "date": this.state.dateValue,
        "description": this.state.descValue,
        "category": this.state.catValue,
        "amount": this.state.amountValue
      })
    })
      .then(this.getTransactions())
  }

  searchTransactions = event => {
    console.log(event.target.value)
    this.setState({ transactions: this.state.transactions.filter(tr => tr.description === event.target.value) })
    // i need to like uhhh loop through the descriptions to see if the like the uhhh the letters match up like if i type
    // "B" in then I want it to reply with all of the transactions that start with a "B" instead of all of the transactions
    // where the description is EXACTLY "B"
    // that's just so extra though
  }

  getTransactions = () => {
    fetch(URL)
      .then(rsp => rsp.json())
      .then(json => this.setState({ transactions: json }))
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.searchTransactions} />
        <AddTransactionForm handleSubmit={this.addTransaction} handleDate={this.handleDate} handleAmount={this.handleAmount} handleCat={this.handleCat} handleDesc={this.handleDesc} />
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
