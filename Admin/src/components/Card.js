import { Container, Title } from "./styles/Card.styled";
import Button from "@mui/material/Button";
import PageviewIcon from "@mui/icons-material/Pageview";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const Card = ({ name }) => {
  return (
    <Container>
      <Title>{name}</Title>
      {/* <Button>View {name}</Button>
      <Button>Edit</Button> */}
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        View {name}
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Add {name}
      </Button> */}
      <Stack direction="column" spacing={5}>
        <Button
          variant="outlined"
          startIcon={<PageviewIcon />}
          color="secondary"
        >
          View {name}
        </Button>
        <Button
          variant="contained"
          endIcon={<AddCircleIcon />}
          color="secondary"
        >
          Add {name}
        </Button>
      </Stack>
    </Container>
  );
};

export default Card;
