import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
      description: null,
      category: null,
      amount: null
    }
  }

  changeDate = (e) => {
    this.setState({
      date: e.target.value
    })
  };

  changeDescription = (e) => {
    this.setState({
      description: e.target.value
    })
  };

  changeCategory = (e) => {
    this.setState({
      category: e.target.value
    })
  };

  changeAmount = (e) => {
    this.setState({
      amount: e.target.value,
    })
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" onChange={this.changeDate}/>
            <input type="text" name="description" placeholder="Description" onChange={this.changeDescription}/>
            <input type="text" name="category" placeholder="Category" onChange={this.changeCategory}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.changeAmount}
            />
          </div>
          <button className="ui button" type="button" onClick={() => this.props.submitClick(this.state)}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
