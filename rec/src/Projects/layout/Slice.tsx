// src/features/TaskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    filter: 'all', // Filter options: all, todo, inprogress, done
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        title: action.payload.title,
        status: 'todo', // New tasks default to 'todo'
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find(task => task.id === id);
      if (task) {
        task.status = status;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, removeTask, updateTaskStatus, setFilter } = TaskSlice.actions;
export default TaskSlice.reducer;
