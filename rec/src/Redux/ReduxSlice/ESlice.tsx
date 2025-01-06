import { createSlice } from "@reduxjs/toolkit";
export const ExpenseSlice = createSlice({
    name: "expensesplitter",
    initialState: { expense: 0 , nums:0 },
    reducers: {
        split: (state, action) => {
            const { expense, nums } = action.payload
            if (nums !== 0 && expense > 0) { 
                state.expense = expense/nums
            }
            
        }
    }
    
})
export const { split } = ExpenseSlice.actions
export default ExpenseSlice.reducer;