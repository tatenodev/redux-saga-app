import { combineReducers } from "redux";
import { usersReducer } from "./users";

export const allReducer = combineReducers({
    users: usersReducer,
})