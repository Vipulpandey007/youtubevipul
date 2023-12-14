import { createSlice } from "@reduxjs/toolkit";

const sidenavSlice = createSlice({
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
export const { toggleMenu } = sidenavSlice.actions;
export default sidenavSlice.reducer;
