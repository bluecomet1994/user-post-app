import { combineReducers } from "redux";
import userReducer from "./user.reducer";

const reducers = combineReducers({
  userReducer,
});

export default reducers;