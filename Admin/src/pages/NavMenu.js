import { Link } from "react-router-dom";
import {
  NavBars,
  NavMenuContainer,
  Wrapper,
  InfoContainer,
} from "./styles/NavMenu.styled";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import { Button } from "@mui/material";

const NavMenu = () => {
  const [slider, setSlider] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { pathname } = useLocation();

  const handleClick = () => {
    dispatch(logout());
    navigate("/signin");
  };
  return (
    <>
      {pathname !== "/signin" && (
        <Wrapper>
          <NavBars>
            <Button
              sx={{ "&:focus": { bgcolor: "#060b26" } }}
              to=""
              onClick={() => setSlider((oldState) => !oldState)}
            >
              <FaIcons.FaBars style={{ width: "30px", height: "30px" }} />
            </Button>
            <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              Amazooo
            </div>
            <InfoContainer>
              {currentUser ? (
                <div>
                  <Avatar sx={{ bgcolor: "#1a83ff", margin: "8px 8px" }}>
                    {currentUser?.username[0]}
                  </Avatar>
                  <p>@{currentUser?.username}</p>
                  <Button
                    variant="contained"
                    onClick={handleClick}
                    sx={{ fontWeight: 100, textTransform: "lowercase" }}
                  >
                    Log out
                  </Button>
                </div>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleClick}
                  sx={{ fontWeight: 100, textTransform: "lowercase" }}
                >
                  SignIn
                </Button>
              )}
            </InfoContainer>
          </NavBars>
          <NavMenuContainer slider={slider}>
            <ul>
              <li>
                <Button
                  to=""
                  onClick={() => setSlider((oldState) => !oldState)}
                >
                  <AiIcons.AiOutlineClose
                    style={{ width: 40, height: 40, fontWeight: 100 }}
                  />
                </Button>
              </li>
              <li>
                <Link to="/">
                  <AiIcons.AiFillDashboard style={{ width: 30, height: 25 }} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/addproduct">
                  <AiIcons.AiFillFileAdd style={{ width: 30, height: 25 }} />
                  <span>Add Product</span>
                </Link>
              </li>
              <li>
                <Link to="products">
                  <FaIcons.FaCartPlus style={{ width: 30, height: 25 }} />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="orders">
                  <MdIcons.MdSell style={{ width: 30, height: 25 }} />
                  <span>Orders</span>
                </Link>
              </li>
              <li>
                <Link to="users">
                  <AiIcons.AiOutlineTeam style={{ width: 30, height: 25 }} />
                  <span>Users</span>
                </Link>
              </li>
            </ul>
          </NavMenuContainer>
        </Wrapper>
      )}
    </>
  );
};

export default NavMenu;
