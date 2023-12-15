import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
  name: "nav",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});
export const { toggleMenu } = sideNavSlice.actions;
export default sideNavSlice.reducer;
