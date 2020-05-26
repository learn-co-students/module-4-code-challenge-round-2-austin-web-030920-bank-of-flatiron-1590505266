import React, {Component} from "react";
import Transaction from "./Transaction";
import PropTypes from "prop-types";

class TransactionsList extends Component {
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
          {/* {console.log(this.props)} */}
          {this.props.search
            ? this.props.trans.map((transaction) => (
                <Transaction key={transaction.id} trans={transaction} />
              ))
            : this.props.trans.map((transaction) => (
                <Transaction key={transaction.id} trans={transaction} />
              ))}
        </tbody>
      </table>
    );
  }
}

TransactionsList.propTypes = {
  trans: PropTypes.array,
}; 

export default TransactionsList;
