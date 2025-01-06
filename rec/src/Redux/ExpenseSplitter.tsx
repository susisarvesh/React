import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { split } from './ReduxSlice/ESlice';

function ExpenseSplitter() {
    const split_expense = useSelector((state) => state.exp.expense);
    const dispatcher = useDispatch();
    const [value, setValue] = useState({
        expense: 0,
        nums: 0
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((prev) => ({
            ...prev,
            [name]: parseInt(value, 10) || 0
        }));
    };

    return (
        <>
                <h3 className="text-[30px] font-thin mb-10 mt-10">Quiz App:[Redux , Redux-Toolkit , Store , Slice , useState ]</h3>
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">Expense Splitter</h1>
                <div className="mb-4">
                    <input 
                        type="number" 
                        name="expense" 
                        placeholder="Enter Total Expense" 
                        onChange={handleChange} 
                        className="w-full p-2 mb-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                    <input 
                        type="number" 
                        name="nums" 
                        placeholder="Enter Number of Splits" 
                        onChange={handleChange} 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>
                <button 
                    onClick={() => dispatcher(split(value))} 
                    className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Split Expense
                </button>
                <div className="p-4 mt-6 rounded-lg bg-gray-50">
                    <h2 className="text-lg font-semibold text-gray-600">Split Amount:</h2>
                    <p className="text-2xl font-bold text-blue-600">₹{split_expense.toFixed(2)}</p>
                </div>
            </div>
            </div>
            </>
    );
}

export default ExpenseSplitter;
