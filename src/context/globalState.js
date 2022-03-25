import React, { createContext, useReducer } from "react";
import reducer from "./AppReducer";

// set initial state

const initialState = {
  transactions: [],
};

// create context and set initial state as argument
export const GlobalContext = createContext(initialState);

// create context provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(task) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: task,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
