import React, { Component } from "react";
const URL = 'http://localhost:6001';

class AddTransactionForm extends Component {
  handleSubmit = (e) => {
    console.log(e);

    e.preventDefault();
    
    fetch(`${URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        date: '',
        description: 'its static /:',
        category: '',
        amount: '',
      }),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" />
            <input type="text" name="description" placeholder="Description" />
            <input type="text" name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
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
