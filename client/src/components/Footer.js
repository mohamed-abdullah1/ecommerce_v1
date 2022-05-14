import { Instagram, Twitter } from "@material-ui/icons";
import { Facebook } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";

import {
  Container,
  Left,
  Logo,
  Description,
  SocialItem,
  SocialItems,
  Center,
  Title,
  ListItem,
  ListItems,
  Right,
  ContactItem,
} from "./styles/Footer.styled";

const Footer = ({ page }) => {
  return (
    <Container page={page}>
      <Left>
        <Logo>AMZOOO.</Logo>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem
        </Description>
        <SocialItems>
          <SocialItem>
            <Facebook fontSize="large" />
          </SocialItem>
          <SocialItem>
            <Twitter fontSize="large" />
          </SocialItem>
          <SocialItem>
            <Instagram fontSize="large" />
          </SocialItem>
        </SocialItems>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <ListItems>
          <ListItem>
            <Link style={{ color: "black", textDecorationLine: "none" }} to="/">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ color: "black", textDecorationLine: "none" }}
              to="/cart"
            >
              Cart
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ color: "black", textDecorationLine: "none" }}
              to="/products/men"
            >
              Man Fashion
            </Link>
          </ListItem>
          <ListItem>
            <Link
              style={{ color: "black", textDecorationLine: "none" }}
              to="/products/women"
            >
              Woman Fashion
            </Link>
          </ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Accountant</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Terms</ListItem>
        </ListItems>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactItem>
          <LocationOnIcon /> 622 Dixie path, south Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon /> +12 345 66 48
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon /> Amazoo@contact.dev
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
