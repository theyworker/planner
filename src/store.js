import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./redux/list";
export default configureStore({
  reducer: {
    list: listSlice,
  },
});
