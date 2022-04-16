import { loginStart, loginSuccess, loginFailure } from "./userSlice";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log("userData req :", user);
    const res = await axios.post("http://localhost:9898/api/auth/login", user);
    console.log("userData response:", res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
