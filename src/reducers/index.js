import { combineReducers } from "redux";
import postsReducer from "./postReducer";
import usersReducer from "./usersReducers";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});
