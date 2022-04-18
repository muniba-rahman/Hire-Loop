// this slice will persist application UI states such as themes, drawer state, and orientation states
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawer_open: false,
};

const appStates = createSlice({
  name: "appStates",
  initialState,
  reducers: {
    drawerToggle(state) {
      state.drawer_open = !state.drawer_open;
    },
  },
});

export const { drawerToggle } = appStates.actions;
export default appStates.reducer;
