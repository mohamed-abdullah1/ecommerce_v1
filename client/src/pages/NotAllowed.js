import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Blink, Container, Number } from "./styles/NotAllowed.styled";

const NotAllowed = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <p>
          <Number>403</Number>
          <Blink>
            Forbidden <span>_</span>
          </Blink>
          <Button
            sx={{
              bgcolor: "#54fe55",
              color: "black",
              width: "20%",
              fontFamily: "'Press Start 2P'",
              padding: "30px 20px",
              "&:hover": {
                bgcolor: "#51e251",
              },
            }}
            onClick={() => navigate("/")}
          >
            Go Home
          </Button>
        </p>
      </Container>
    </>
  );
};

export default NotAllowed;
