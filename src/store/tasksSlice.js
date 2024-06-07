import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task, index) => index !== action.payload);
    },
    editTask: (state, action) => {
      const { index, text } = action.payload;
      state[index].text = text;
    },
    toggleComplete: (state, action) => {
      const task = state[action.payload];
      task.completed = !task.completed;
    }
  },
});

export const { addTask, deleteTask, editTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
