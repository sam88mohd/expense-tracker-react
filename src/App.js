import React from "react";
import Balance from "./components/Balance";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </>
  );
};

export default App;
