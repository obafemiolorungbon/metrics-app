import { combineReducers } from "redux";
import authReducerSlice from "./pages/home/redux/reducer";

const rootReducers = combineReducers({
  user: authReducerSlice,
});

export default rootReducers;
