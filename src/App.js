import React, { useState } from "react";
import Balance from "./components/Balance";
import Header from "./components/Header";
import HistoryList from "./components/HistoryList";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";

const initialTransactions = [
  {
    text: "First",
    amount: 50,
  },
];

const App = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState(initialTransactions);

  const submitTransactions = (e) => {
    e.preventDefault();
    if (text !== "") {
      setTransactions((oldTransactions) => [
        ...oldTransactions,
        {
          text,
          amount,
        },
      ]);
    }
    setText("");
    setAmount(0);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <HistoryList transactions={transactions} />
        <Transaction
          text={text}
          setText={setText}
          amount={amount}
          setAmount={setAmount}
          submitTransactions={submitTransactions}
        />
      </div>
    </>
  );
};

export default App;
