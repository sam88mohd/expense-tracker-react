import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .map((transaction) => transaction.amount)
    .reduce((total, transaction) => (total += transaction), 0)
    .toFixed(2);

  const expense = transactions
    .filter((transaction) => transaction.amount <= 0)
    .map((transaction) => transaction.amount)
    .reduce((total, transaction) => (total -= transaction), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+ RM {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">- RM {expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
