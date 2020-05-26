import React, { Component } from "react";

class AddTransactionForm extends Component {

  constructor() {
    super();

    this.state = {
      date: "",
      description: "",
      amount: "",
      category: ""

    };
  }

  handleChangeDate = event => {
    this.setState({ date: event.target.value });
  }

  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  }

  handleChangeAmount = event => {
    this.setState({ amount: event.target.value });
  }

  handleChangeCategory = event => {
    this.setState({ category: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={this.handleChangeDate} />
            <input type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleChangeDescription} />
            <input type="text" name="category" placeholder="Category" value={this.state.category} onChange={this.handleChangeCategory} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount} onChange={this.handleChangeAmount}
            />
          </div>
          <button className="ui button" type="submit" onClick = {(e) => {this.props.handleSubmit(e)}}
          >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
