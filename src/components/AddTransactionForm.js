import React, { Component } from "react";

class AddTransactionForm extends Component {

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input
              type="date"
              name="date"
              value={this.props.dateValue}
              onChange={event => this.props.handleDate(event)}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.props.descValue}
              onChange={event => this.props.handleDesc(event)}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.props.catValue}
              onChange={event => this.props.handleCat(event)}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.props.amountValue}
              onChange={event => this.props.handleAmount(event)}
            />
          </div>
          <button className="ui button" type="submit"
            onSubmit={event => this.props.handleSubmit(event)}
          >
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
