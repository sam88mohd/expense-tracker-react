import React from "react";

const TransactionForm = (props) => {
  const { text, setText, amount, setAmount, submitTransactions } = props;
  return (
    <form onSubmit={submitTransactions}>
      <div>
        <label>Text</label>
        <input
          type="text"
          placeholder="Enter text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label>
          Amount <br /> ( negative - expense, positive - income )
        </label>
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="btn" type="submit">
        Add transaction
      </button>
    </form>
  );
};

export default TransactionForm;
