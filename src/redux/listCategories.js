import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const listCategoryItem = (payload) => ({
  name: payload.name,
  uuid: uuidv4(),
  active: true,
});
export const listCategoriesSlice = createSlice({
  name: "listCategories",
  initialState: {
    categories: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.categories = [...state.categories, listCategoryItem(action.payload)];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCategory } = listCategoriesSlice.actions;

export default listCategoriesSlice.reducer;
