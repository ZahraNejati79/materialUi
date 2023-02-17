import postsReducre from "./Posts/postsReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  postInformation: postsReducre,
});
export default rootReducer;
