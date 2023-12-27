import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  user: authReducer,
  token: authReducer,
});

export default rootReducer;
