import { NavContainer, Button } from "./styles/Navbar.styled";
const Navbar = () => {
  return (
    <NavContainer>
      <h1>Amazooo.</h1>
      <div>
        <p>@admin_username</p>
        <Button>Log out</Button>
      </div>
    </NavContainer>
  );
};

export default Navbar;
