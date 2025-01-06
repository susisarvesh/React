import { configureStore } from "@reduxjs/toolkit"
import expenseReducer from "../ReduxSlice/ESlice"

export const expense = configureStore({
    reducer: {
        exp:expenseReducer
    }
})