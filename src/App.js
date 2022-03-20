import React from "react";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </>
  );
};

export default App;
