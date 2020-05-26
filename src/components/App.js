import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

const API = "http://localhost:6001/transactions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      filtered: []
    };
  }

  componentDidMount = () => {
    fetch(API)
      .then((res) => res.json())
      .then((transactions) =>
        this.setState({
          transactions: transactions,
          filtered: transactions
        })
      );
  };

  addTransaction = (transaction) => {
    // console.log(transaction);
    this.setState({
      transactions: [
        ...this.state.transactions,
        {
          date: transaction.target.date.value,
          description: transaction.target.description.value,
          category: transaction.target.category.value,
          amount: transaction.target.amount.value,
        },
      ],
      filtered: [
        ...this.state.transactions,
        {
          date: transaction.target.date.value,
          description: transaction.target.description.value,
          category: transaction.target.category.value,
          amount: transaction.target.amount.value,
        },
      ], //Was almost able to get this working w/o having to update both transactions and state here but couldn't. Had trouble with the asynchrynisoty and filtered was not automatically pulling from an update transactions, but would if I searched and then cleared the search field
    });
    // console.log(`${API}/${transaction.target.id}`);
  };

  componentDidUpdate = () => {
    // console.log(this.state.transactions)
    // fetch(API, {
    //   method: "UPDATE",
    //   headers: {
    //     "Content-type": "application/json",
    //     Accepts: "application/json",
    //   },
    //   body: this.state.transactions,
    // });
  }

  search = (keyword) => {
    this.setState({
      filtered: [
        ...this.state.transactions.filter(
          (transaction) => transaction.description.includes(keyword) === true
        ),
      ],
    });
  };

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer
          transactions={this.state.filtered}
          addTransaction={this.addTransaction}
          search={this.search}
        />
      </div>
    );
  }
}

export default App;
