import React, { Component } from "react";
import Transaction from "./Transaction";

class TransactionsList extends Component {

  renderTrans = () => {
    return this.props.transactions.map(t => <Transaction key={t.id} trans={t} />)
  }

  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Date</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>
          {this.renderTrans()}
        </tbody>
      </table>
    );
  };
};

export default TransactionsList;
