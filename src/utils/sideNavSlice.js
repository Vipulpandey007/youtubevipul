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
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
  },
});
export const { toggleMenu, closeMenu, openMenu } = sideNavSlice.actions;
export default sideNavSlice.reducer;
