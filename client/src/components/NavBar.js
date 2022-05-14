import React from "react";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {
  Container,
  Wrapper,
  Center,
  Logo,
  Left,
  Right,
  MenuItem,
  Button,
} from "./styles/NavBar.styled";
import { logoutCall } from "../redux/apiCall";
import { Searchbar } from "./Searchbar";
import { MdAdminPanelSettings } from "react-icons/md";
const NavBar = () => {
  //states and variables
  const { quantity } = useSelector((state) => state.cart);
  const { currentUser, washList } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state);

  const numberOfWashListItems = washList?.length;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navStyle = ({ isActive }) => ({
    transition: "0.5s ease-in-out all",
    transform: isActive && "scaleX(1.5)",
    fontWeight: isActive && 700,
    color: "black",
    textDecoration: "none",
    marginLeft: "15px",
  });

  //handlers
  const handleLogout = () => {
    dispatch(logoutCall(dispatch, currentUser, washList, cart));

    navigate("/");
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Logo>AMZOOO.</Logo>
            </Link>
          </Left>
          <Center>
            <Searchbar />
          </Center>

          <Right>
            {currentUser.isAdmin && (
              <MenuItem
                style={{
                  marginRight: 5,
                  padding: 5,
                }}
                onClick={() => navigate("/dashboard")}
              >
                <MdAdminPanelSettings
                  style={{
                    fontSize: "25px",
                    marginBottom: "6px",
                    marginRight: "2px",
                  }}
                />
                <p style={{ display: "inline" }}>Admin</p>
              </MenuItem>
            )}
            <MenuItem
              style={{
                marginRight: 5,
                padding: 5,
              }}
            >
              <NavLink to="/userinfo" style={navStyle}>
                <PersonIcon
                  style={{ marginBottom: "6px", marginRight: "2px" }}
                />
                <p style={{ display: "inline" }}>{currentUser.username}</p>
              </NavLink>
            </MenuItem>
            <MenuItem
              style={{
                marginRight: 5,
                padding: 5,
              }}
            >
              <NavLink to="/ordershistory" style={navStyle}>
                <ShoppingBagIcon
                  style={{ marginBottom: "6px", marginRight: "2px" }}
                />
                <p style={{ display: "inline" }}>orders</p>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <Link
                  to="/cart"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "15px",
                  }}
                >
                  <ShoppingCartIcon style={{ fontSize: 30 }} />
                </Link>
              </Badge>
            </MenuItem>
            <MenuItem>
              <Badge badgeContent={numberOfWashListItems} color="secondary">
                <Link
                  to="/washlist"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    marginLeft: "15px",
                  }}
                >
                  <FavoriteIcon style={{ fontSize: 30 }} />
                </Link>
              </Badge>
            </MenuItem>
            <MenuItem
              style={{
                border: "1px solid black",
                marginLeft: "20px",
                padding: 5,
              }}
            >
              <Button
                style={{ textDecoration: "none", color: "black" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default NavBar;
