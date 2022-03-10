import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ui: {
    loading: false,
  },
  dashboardData: {},
};

export const dashboardReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    getData: (state) => {
      state.ui.loading = true;
    },
    getDashboardDataSuccess: (state, { payload }) => {
      state.dashboardData = payload;
      state.ui.loading = false;
    },
    action_fails: (state) => {
      state.ui.loading = false;
    },
  },
});

export const { getData, getDashboardDataSuccess, action_fails } =
  dashboardReducer.actions;

export default dashboardReducer.reducer;
