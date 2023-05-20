import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {},
  reducers: {
    create: (state, action) => {
      state = action.payload;
    },
    edit: (state, action) => {
      state = action.payload;
    },
    remove: (state) => {
      state = '';
    }
  }
});

export const selectTask = (state) => state;

export const { create, edit, remove } = taskSlice.actions;

export default taskSlice.reducer;
