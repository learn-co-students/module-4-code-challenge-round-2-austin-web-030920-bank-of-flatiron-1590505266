import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
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
        {props.trans.length > 0 ? props.trans.map((transaction) => (<Transaction trans={transaction} />))
        : setTimeout(() => {props.trans.map((transaction) => (<Transaction trans={transaction}/> ), 2000)})
        }
        // {props.trans.map((transaction) => (
        //   <Transaction trans={transaction} />
        // ))}
      </tbody>
    </table>
  );
};

export default TransactionsList;
