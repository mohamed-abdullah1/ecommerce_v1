import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    washList: [],
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.washList = [];
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.washList = [];
    },
    addToWashList: (state, action) => {
      if (!state.washList.includes(action.payload)) {
        state.washList.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, addToWashList } =
  userSlice.actions;
export default userSlice.reducer;
