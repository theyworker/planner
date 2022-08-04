import { createSlice } from "@reduxjs/toolkit";

export const todaySlice = createSlice({
  name: "today",
  initialState: {
    data: [],
  },
  reducers: {

    setTodayData: (state, action) => {
      state.data = action.payload;
    },
    addItem : (state, action) => {
        state.data = [...state.data, action.payload]
    }
  },
});

// Action creators are generated for each case reducer function
export const { setTodayData,addItem } = todaySlice.actions;

export default todaySlice.reducer;
