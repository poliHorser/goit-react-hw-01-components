import React from 'react';
import "./Transactions.css"

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className='title-tr'>Type</th>
          <th className='title-tr'>Amount</th>
          <th className='title-tr'>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id} className={index % 2 === 0 ? 'even' : 'odd'}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export {TransactionHistory};
