import React from "react";

const TransactionsList = ({ t }) => {
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
        <tr>
          <td>{t.date}</td>
          <td>{t.description}</td>
          <td>{t.category}</td>
          <td>{t.amount}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TransactionsList;
