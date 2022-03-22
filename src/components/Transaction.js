import React from "react";
import TransactionForm from "./TransactionForm";

const Transaction = (props) => {
  return (
    <>
      <h3>Add new transaction</h3>
      <TransactionForm {...props} />
    </>
  );
};

export default Transaction;
