import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./redux/list";
import listCategoriesSlice from "./redux/listCategories";
export default configureStore({
  reducer: {
    listCategories: listCategoriesSlice,
    list: listSlice,
  },
});
