import { combineReducers } from "redux";
import jobs from "./jobs";

const rootReducer = combineReducers({
  jobs: jobs,
});

export default rootReducer;
