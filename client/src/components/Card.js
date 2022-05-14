import { Container, Title } from "./stylesAdmin/Card.styled";
import Button from "@mui/material/Button";
import PageviewIcon from "@mui/icons-material/Pageview";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
const Card = ({ name }) => {
  //variables
  const navigate = useNavigate();
  const handleView = (e) => {
    const type = e.target.innerText.split(" ")[1].toLowerCase();
    navigate(`/${type}`);
  };
  const handleAdd = (e) => {
    const type = e.target.innerText.split(" ")[1].toLowerCase();
    navigate(`/add${type}`);
  };
  return (
    <Container>
      <Title>{name}</Title>
      <Stack direction="column" spacing={5}>
        <Button
          variant="outlined"
          startIcon={<PageviewIcon />}
          color="secondary"
          onClick={handleView}
          sx={{ zIndex: "1" }}
        >
          View {name + "s"}
        </Button>
        {!["user", "order"].includes(name.toLowerCase()) && (
          <Button
            variant="contained"
            endIcon={<AddCircleIcon />}
            color="secondary"
            onClick={handleAdd}
            sx={{ zIndex: "1" }}
          >
            Add {name}
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Card;
