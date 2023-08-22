import { combineReducers } from "redux";
import tablelistReducer from "./tablelistReducer";

export default combineReducers({
  tablelist: tablelistReducer,
});
