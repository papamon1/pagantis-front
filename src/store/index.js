import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import users from "./reducers/users";
import wallets from "./reducers/wallets";
import transfers from "./reducers/transfers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  users,
  transfers,
  wallets,
});

export default configureStore({
  // reducer
  reducer,
  middleware: [thunk],
});
