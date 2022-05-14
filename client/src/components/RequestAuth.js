import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
const RequestAuth = () => {
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser) return <Outlet />;
  return <Login />;
};

export default RequestAuth;
