import React, { useReducer, useState } from "react";

// Reducer for managing expenses
const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        expenses: [...state.expenses, action.payload],
        total: state.total + action.payload.amount,
      };
    case "RESET":
      return { expenses: [], total: 0 };
    default:
      return state;
  }
};

function ExpenseCalculator() {
  const [expenseState, dispatch] = useReducer(expenseReducer, {
    expenses: [],
    total: 0,
  });
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const addExpense = () => {
    if (amount && description) {
      dispatch({
        type: "ADD_EXPENSE",
        payload: { amount: parseFloat(amount), description },
      });
      setAmount("");
      setDescription("");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <>
                  <h3 className="text-[30px] font-thin mb-10 mt-10">Expense Tracker: [useState, useReducer , reducer , dispatch]</h3>

    <div className="bg-gradient-to-br from-blue-50 to-indigo-200 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-8">Track Your Expense</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 mb-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>
        <button
          onClick={addExpense}
          className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          Add Expense
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Expenses</h2>
        <ul className="space-y-2 max-h-48 overflow-y-auto">
          {expenseState.expenses.map((expense, index) => (
            <li
              key={index}
              className="flex justify-between p-3 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 animate-fade-in"
            >
              <span className="text-gray-700">{expense.description}</span>
              <span className="text-indigo-600 font-medium">
                ${expense.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          Total:{" "}
          <span className="text-indigo-500">${expenseState.total.toFixed(2)}</span>
        </h3>
      </div>

      <button
        onClick={() => dispatch({ type: "RESET" })}
        className="mt-6 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
      >
        Reset
      </button>
    </div></>
  );
}

export default ExpenseCalculator;
