import { createSelector } from "@reduxjs/toolkit";
const dashboardObject = (state = {}) => state.dashboard;

export const selectDashboardData = createSelector(
  dashboardObject,
  (dashboardObject) => dashboardObject.dashboardData
);
export const selectLoading = createSelector(
  dashboardObject,
  (dashboardObject) => dashboardObject.ui.loading
);
