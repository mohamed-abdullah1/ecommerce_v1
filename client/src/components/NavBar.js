import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { removeCartContent } from "../redux/cartSlice";
import FavoriteIcon from "@material-ui/icons/Favorite";

//styled Components
const Container = styled.div`
  height: 80px;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  z-index: 99;
  background-color: white;
`;
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
`;
//Left components
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Language = styled.span`
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  padding: 5px;
  margin-left: 15px;
`;
const Input = styled.input`
  border: none;
  width: 15rem;
`;
//Center components
const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: 900;
  font-size: 60px;
`;
//Center components
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 5px;
  margin-bottom: 5px;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const NavBar = () => {
  //states and variables
  const { quantity } = useSelector((state) => state.cart);
  const { currentUser, washList } = useSelector((state) => state.user);
  const numberOfWashListItems = washList?.length;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handlers
  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeCartContent());
    navigate("/");
  };

  return (
    <div>
      <Container>
        <Wrapper>
          {/* <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input style={{ fontSize: 14, color: "gray" }}></Input>
              <SearchIcon></SearchIcon>
            </SearchContainer>
          </Left> */}
          <Center>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <Logo>AMZOOO.</Logo>
            </Link>
          </Center>
          {!currentUser ? (
            <Right>
              <MenuItem
                style={{
                  border: "1px solid black",
                  marginRight: 5,
                  padding: 5,
                }}
              >
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Register
                </Link>
              </MenuItem>
              <MenuItem
                style={{
                  border: "1px solid black",
                  marginRight: 5,
                  padding: 5,
                }}
              >
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Login
                </Link>
              </MenuItem>
            </Right>
          ) : (
            <Right>
              <MenuItem
                style={{
                  marginRight: 5,
                  padding: 5,
                }}
              >
                @{currentUser.username}
              </MenuItem>
              <MenuItem
                style={{
                  border: "1px solid black",
                  marginRight: 5,
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
              <MenuItem>
                <Badge badgeContent={quantity} color="secondary">
                  <Link
                    to="/cart"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ShoppingCartIcon style={{ fontSize: 30 }} />
                  </Link>
                </Badge>
              </MenuItem>
              <MenuItem>
                <Badge badgeContent={numberOfWashListItems} color="secondary">
                  <Link
                    to="/washlist"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <FavoriteIcon style={{ fontSize: 30 }} />
                  </Link>
                </Badge>
              </MenuItem>
            </Right>
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default NavBar;
