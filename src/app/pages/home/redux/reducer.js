import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const authReducerSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    save_current_user: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { save_current_user } = authReducerSlice.actions;

export default authReducerSlice.reducer;
