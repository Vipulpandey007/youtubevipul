import { configureStore } from "@reduxjs/toolkit";
import sideNavSlice from "./sideNavSlice";

const store = configureStore({
  reducer: {
    nav: sideNavSlice,
  },
});
export default store;
