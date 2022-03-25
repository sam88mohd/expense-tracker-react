import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const HistoryList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            className={transaction.amount >= 0 ? "plus" : "minus"}
            key={transaction.id}
          >
            {transaction.text}
            <span>
              {transaction.amount < 0 && "-"} RM
              {Math.abs(transaction.amount).toFixed(2)}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HistoryList;
