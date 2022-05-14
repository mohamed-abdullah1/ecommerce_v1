import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import NotAllowed from "../pages/NotAllowed";

const RequestAuthAdmin = () => {
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser?.isAdmin) return <Outlet />;
  if (currentUser) return <NotAllowed />;
  if (!currentUser) return <Login />;
};

export default RequestAuthAdmin;
