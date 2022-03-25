import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalState";
import { v4 as uuid } from "uuid";

const TransactionForm = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleSubmitTransaction = (e) => {
    e.preventDefault();
    if (text !== "" && amount !== 0) {
      addTransaction({
        id: uuid(),
        text,
        amount: parseFloat(amount),
      });
    }
    setText("");
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmitTransaction}>
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
          step="0.01"
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
