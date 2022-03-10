import { put, takeEvery, call } from "@redux-saga/core/effects";
import { dataService } from "../../../../services/dataservice";
import { action_fails, getDashboardDataSuccess, getData } from "./reducer";

function* fetchDashboardData(action) {
  try {
    const {
      payload: { duration },
    } = action;
    const response = yield call(
      dataService.getData,
      `/api/v1/innovate?duration=${duration}`
    );
    yield put({ type: getDashboardDataSuccess.type, payload: response });
  } catch (error) {
    yield put({ type: action_fails.type });
  }
}

function* dashboardDataSaga() {
  yield takeEvery(getData.type, fetchDashboardData);
}

export default dashboardDataSaga;
