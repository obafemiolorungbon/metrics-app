import { createSelector } from "@reduxjs/toolkit";
const userObject = (state = {}) => state.user;

export const selectCurrentUser = createSelector(
  userObject,
  (userObject) => userObject.user
);
