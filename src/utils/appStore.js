import { configureStore } from "@reduxjs/toolkit";
import sideNavSlice from "./sideNavSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";

const appStore = configureStore({
  reducer: {
    nav: sideNavSlice,
    search: SearchSlice,
    chat: ChatSlice,
  },
});
export default appStore;
