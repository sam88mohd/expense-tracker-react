import React from "react";

const TransactionForm = () => {
  return (
    <form action="">
      <div>
        <label>Text</label>
        <input type="text" placeholder="Enter text..." />
      </div>
      <div>
        <label>
          Amount <br /> ( negative - expense, positive - income )
        </label>
        <input type="number" placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
  );
};

export default TransactionForm;
