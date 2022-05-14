import { createSlice, current } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: {
      msg: "",
      trueOrFalse: false,
    },
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
      state.error = {
        msg: "",
        trueOrFalse: false,
      };
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = { msg: action.payload, trueOrFalse: true };
    },
    logout: (state) => {
      state.currentUser = null;
      state.washList = [];
    },
    addToWashList: (state, action) => {
      if (
        !current(state.washList)
          .map((item) => item._id)
          .includes(action.payload._id)
      ) {
        state.washList.push(action.payload);
      }
    },
    removeFromWashList: (state, action) => {
      state.washList = current(state.washList).filter(
        (item) => item._id !== action.payload._id
      );
    },
    stablishWashList: (state, action) => {
      state.washList = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  addToWashList,
  removeFromWashList,
  stablishWashList,
} = userSlice.actions;
export default userSlice.reducer;
