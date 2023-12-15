import { configureStore } from "@reduxjs/toolkit";
import sideNavSlice from "./sideNavSlice";

const appStore = configureStore({
  reducer: {
    nav: sideNavSlice,
  },
});
export default appStore;
