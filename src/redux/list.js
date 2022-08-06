import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const listItem = (payload) => ({
  text: payload.text,
  list: payload.list,
  active: true,
  done: false,
  uuid: uuidv4(),
});
export const listSlice = createSlice({
  name: "list",
  initialState: {
    data: [],
  },
  reducers: {
    setTodayData: (state, action) => {
      state.data = action.payload;
    },
    addItem: (state, action) => {
      state.data = [...state.data, listItem(action.payload)];
    },
    toggleItemAsDone: (state, action) => {
      let newState = state.data.map((item, index) => {
        if (action.payload == item.uuid) {
          return { ...item, done: !item.done };
        }
        return item;
      });
      state.data = newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodayData, addItem, toggleItemAsDone } = listSlice.actions;

export default listSlice.reducer;
