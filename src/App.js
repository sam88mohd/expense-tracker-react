import React from "react";
import Balance from "./components/Balance";
import Header from "./components/Header";
import HistoryList from "./components/HistoryList";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import { GlobalProvider } from "./context/globalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <HistoryList />
        <Transaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
