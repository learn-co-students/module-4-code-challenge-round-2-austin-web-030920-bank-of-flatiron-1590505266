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
      // dateValue: '',
      // descValue: '',
      // catValue: '',
      // amountValue: ''
    }
  }

  componentDidMount() {
    this.getTransactions()
  }

  // handleDate(e) {
  //   this.setState({dateValue: e.target.value})
  // }

  // handleDesc(e) {
  //   this.setState({descValue: e.target.value})
  // }

  // handleCat(e) {
  //   this.setState({catValue: e.target.value})
  // }

  // handleAmount(e) {
  //   this.setState({amountValue: e.target.value})
  // }

  // addTransaction(e) {
  //   let newTran = {
  //     "id": `${this.state.transactions.length+1}`,
  //     "date": `${this.handleDate()}`,
  //     "description": `${this.handleDesc()}`,
  //     "category": `${this.handleCat()}`,
  //     "amount": `${this.handleAmount()}`
  //   };
  //   this.setState({transactions: this.state.transactions.unshift(newTran)});

  //   fetch(URL, {
  //     method: "POST"
  //   })
  // }

  searchTransactions = (e) => {
    console.log("Searched!")
    this.setState({transactions: this.state.transactions.filter(t => t.description === e.target.input.value)})
  }
  
  getTransactions = () => {
    fetch(URL)
      .then(rsp => rsp.json())
      .then(json => this.setState({transactions: json}))
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.searchTransactions}/>
        <AddTransactionForm handleSubmit={this.addTransaction} handleDate={this.handleDate} handleAmount={this.handleAmount} handleCat={this.handleCat} handleDesc={this.handleDesc}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
