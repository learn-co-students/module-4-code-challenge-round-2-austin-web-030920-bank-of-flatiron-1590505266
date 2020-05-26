import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

const URL = "http://localhost:6001/transactions"

class AccountContainer extends Component {
  constructor(){
    super()
    this.state = {
      allTrans: null,
      newTrans: null,
      filterTrans: null
    }
  }

  componentDidMount = () => {
    fetch(URL).then(r => r.json()).then(allTrans => this.setState({ allTrans }));
  }

  handleSubmit = (newT) => {
    this.setState({newTrans: newT})
    this.updateDB(newT)
    this.newFetch()
  }

  updateDB = (newT) => {
    fetch(URL, {
      method: 'POST',
      headers:
      {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newT )
    }).then(r => r.json()).then(json => console.log(json))
  }

  newFetch = () => {
    fetch(URL).then(r => r.json()).then(allTrans => this.setState({ allTrans }));
  }

  handleSearch = (e) => {
    e.persist();
    e.preventDefault();
    let filteredTrans = [];
    this.state.allTrans.filter(tran => {
      if (tran.description === e.target.value) {
          filteredTrans.push(tran)
          this.setState({allTrans: filteredTrans})
          // if (!this.state.filterTrans) {
            
          // }
      }
    })
  }

  render() {
    return (
      <div>
        <Search submitSearch={this.handleSearch}/>
        <AddTransactionForm submitClick={this.handleSubmit}/>
        <TransactionsList transactions={this.state.allTrans}/>
      </div>
    );
  }
}

export default AccountContainer;
