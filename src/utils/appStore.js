import { configureStore } from "@reduxjs/toolkit";
import sideNavSlice from "./sideNavSlice";
import SearchSlice from "./SearchSlice";

const appStore = configureStore({
  reducer: {
    nav: sideNavSlice,
    search: SearchSlice,
  },
});
export default appStore;
