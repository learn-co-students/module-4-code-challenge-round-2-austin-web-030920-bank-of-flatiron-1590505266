import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const URL = 'http://localhost:6001'
class AccountContainer extends Component {
  state = {
    transactions: [], 
  }

  componentDidMount = () => {
    fetch(`${URL}/transactions`)
      .then((r) => r.json())
      .then((transactions) =>
        this.setState({
          transactions
        })
      );
  };


  render() {
    const { transactions } = this.state;
    return (
      <div>
        <Search />
        <AddTransactionForm />
        {transactions.map((t, indx) => <TransactionsList key={indx} t={t}/>)}
      </div>
    );
  }
}

export default AccountContainer;
