import React, { Component } from "react";

class AddTransactionForm extends Component {
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

  
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input 
            type="date" 
            name="date" 
            // value={this.state.dateValue} 
            // onChange={this.props.handleDate()}
            />
            <input 
            type="text" 
            name="description" 
            placeholder="Description" 
            // value={this.props.descValue} 
            // onChange={this.props.handleDesc()}
            />
            <input 
            type="text" 
            name="category" 
            placeholder="Category" 
            // value={this.state.catValue} 
            // onChange={this.props.handleCat()} 
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              // value={this.state.amountValue}
              // onChange={this.props.handleAmount()}
            />
          </div>
          <button className="ui button" type="submit" 
          // onSubmit={() => this.props.handleSubmit()}
          >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
