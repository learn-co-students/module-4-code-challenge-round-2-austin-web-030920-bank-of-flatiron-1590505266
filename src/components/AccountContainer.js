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
      searchValue: ''
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
    console.log(e)
    //why tf is e undefined? oh wait i need to pass something into the function on the other end--
    this.setState({searchValue: e})
   return this.setState({transactions: this.state.transactions.filter(tr => tr.description === this.state.searchValue)})
  }
  
  getTransactions = () => {
    fetch(URL)
      .then(rsp => rsp.json())
      .then(json => this.setState({transactions: json}))
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.searchTransactions} t={this.state.searchValue} />
        <AddTransactionForm handleSubmit={this.addTransaction} handleDate={this.handleDate} handleAmount={this.handleAmount} handleCat={this.handleCat} handleDesc={this.handleDesc}/>
        <TransactionsList transactions={this.state.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
