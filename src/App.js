import React from "react";
import Balance from "./components/Balance";
import Header from "./components/Header";
import HistoryList from "./components/HistoryList";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <HistoryList />
        <Transaction />
      </div>
    </>
  );
};

export default App;
