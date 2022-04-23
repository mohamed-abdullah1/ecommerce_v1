import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log("userData req :", user);
    const res = await axios.post("http://localhost:9898/api/auth/login", user);
    console.log("userData response:", res.data);
    if (res.data.isAdmin === true) {
      dispatch(loginSuccess(res.data));
    } else {
      dispatch(
        loginFailure({
          trueOrFalse: true,
          errMsg: { msg: "this is not the admin it is a client account" },
        })
      );
    }
  } catch (err) {
    dispatch(
      loginFailure({
        trueOrFalse: true,
        errMsg: { msg: "error in password or username" },
      })
    );
  }
};
