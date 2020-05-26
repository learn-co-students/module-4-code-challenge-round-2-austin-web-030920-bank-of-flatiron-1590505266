import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const URL = 'http://localhost:6001'
class AccountContainer extends Component {
  state = {
    transactions: [], 
    filered: '',
  }

  componentDidMount = () => {
    fetch(`${URL}/transactions`)
      .then((r) => r.json())
      .then((transactions) =>
        this.setState({
          transactions,
        })
      );
  };

  handleSearch = (e) => {
    this.setState({filered: e.target.value})
  }
  


  render() {
   const filterSearch =
      this.state.transactions.filter(t => {
        return t.description.toLowerCase().includes(this.state.filered.toLowerCase());
      })
    
    const { transactions } = this.state;
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <AddTransactionForm />
        {transactions.map((t, indx) => <TransactionsList key={indx} t={t} filterSearch={this.filterSearch}/>)}
      </div>
    );
  }
}

export default AccountContainer;
