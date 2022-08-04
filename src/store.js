import { configureStore } from "@reduxjs/toolkit";
import todaySlice from "./redux/today";
export default configureStore({
  reducer: {
    today: todaySlice,
  },
});
