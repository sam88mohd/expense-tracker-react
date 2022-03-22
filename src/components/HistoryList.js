import React from "react";

const HistoryList = ({ transactions }) => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className={transaction.amount >= 0 ? "plus" : "minus"}>
            {transaction.text}
            <span>
              {transaction.amount < 0 && "-"} RM
              {Math.abs(transaction.amount)}
            </span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HistoryList;
