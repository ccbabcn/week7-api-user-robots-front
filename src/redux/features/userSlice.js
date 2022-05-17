import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "name",
  initialState: { username: "", name: "", id: "" },
  reducers: {
    logIn: (user, action) => ({ ...action.payload }), //sin los parentesis se piensa que son las llaves de una funcion arrow
    logOut: (user, action) => ({}),
  },
});

export const { logIn: logInActionCreator, logOut: logOutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
