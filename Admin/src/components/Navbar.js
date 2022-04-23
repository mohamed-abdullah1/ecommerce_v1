import Avatar from "@mui/material/Avatar";
import { NavContainer, Button } from "./styles/Navbar.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
const Navbar = () => {
  //variables
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { pathname } = useLocation();
  console.log(pathname);
  //handlers
  const handleClick = () => {
    dispatch(logout());
    navigate("/signin");
  };
  return (
    <>
      {pathname !== "/signin" && (
        <NavContainer>
          <h1 onClick={() => navigate("/")}>Amazooo.</h1>
          {currentUser ? (
            <div>
              <Avatar sx={{ bgcolor: "#991880", margin: "8px 8px" }}>
                {currentUser?.username[0]}
              </Avatar>
              <p>@{currentUser?.username}</p>
              <Button onClick={handleClick}>Log out</Button>
            </div>
          ) : (
            <Button onClick={handleClick}>SignIn</Button>
          )}
        </NavContainer>
      )}
    </>
  );
};
export default Navbar;
