import React, { Component } from "react";

class AddTransactionForm extends Component {

  constructor() {
    super();

    this.state = this.getInitialState()
    //console.log(this.state)

  }
  
  getInitialState = () => ({ date: ' ', description: ' ', amount: ' ', category: ' ' })

  handleChange = event => {
   // console.log(e)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { date, description, amount, category } = this.state
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        date: date,
        description: description,
        amount: amount,
        category: category

      })
    })
      .then(resp => resp.json())
      .then(trans => this.props.addTransaction(trans))
    this.setState(this.getInitialState())
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" value={this.state.date} onChange={e =>this.handleChange(e)} />
            <input type="text" name="description" value={this.state.description} placeholder="Description" onChange={e=>this.handleChange(e)} />
            <input type="text" name="category" value={this.state.category} placeholder="Category" onChange={e =>this.handleChange(e)} />
            <input
              type="number"
              name="amount"
              value={this.state.amount}
              placeholder="Amount"
              step="0.01"
              onChange={e => this.handleChange(e)}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
