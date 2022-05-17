import { configureStore } from "@reduxjs/toolkit";
import robotsReducer from "../features/robotsSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: { robots: robotsReducer },
});

export const userStore = configureStore({
  reducer: { user: userReducer },
});

export default store;
