import { combineReducers } from "redux";
import doctorsReducer from "../containers/SearchDoctor/reducer";

export default combineReducers({
  doctorsState: doctorsReducer,
});
