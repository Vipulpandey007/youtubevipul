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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu, closeMenu } = sideNavSlice.actions;
export default sideNavSlice.reducer;
