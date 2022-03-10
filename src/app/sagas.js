import { all } from "redux-saga/effects";
import dashboardDataSaga from "./pages/dashboard/redux/saga";

export default function* root() {
  yield all([dashboardDataSaga()]);
}
