import { configureStore } from "@reduxjs/toolkit";
import taskReducer from '../layout/Slice';
export const reduxStore = configureStore({
    reducer: {
    tasks: taskReducer, // Ensure this matches your state slice name
  },
})