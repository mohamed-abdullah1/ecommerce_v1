import { Instagram, Twitter } from "@material-ui/icons";
import { Facebook } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styled from "styled-components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  padding: 20px;
`;
//Left
const Left = styled.div`
  flex: 1;
  padding: 30px;
  padding-bottom: 0;
`;
const Logo = styled.h1`
  font-weight: 900;
`;
const Description = styled.div``;
const SocialItems = styled.div`
  display: flex;
  margin-top: 10px;
`;
const SocialItem = styled.div`
  margin: 5px;
  font-size: 30px;
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    color: teal;
  }
`;
//Center
const Center = styled.div`
  flex: 1;
  padding: 30px;
  padding-bottom: 0;
`;
const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 20px;
`;
const ListItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 60%;
`;
const ListItem = styled.li`
  margin-bottom: 5px;
  width: 50%;
  font-size: 20px;
`;
//right
const Right = styled.div`
  flex: 1;
  padding: 30px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
`;
const ContactItem = styled.div`
  margin-bottom: 10px;
`;
const Footer = () => {
  return (
    <Container>
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
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">Cart</Link>
          </ListItem>
          <ListItem>
            <Link to="/products/men">Man Fashion</Link>
          </ListItem>
          <ListItem>
            <Link to="/products/women">Woman Fashion</Link>
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
