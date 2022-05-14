import { Container, Wrapper } from "./stylesAdmin/Users.styled";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import NavMenu from "./NavMenu";

const columns = [
  { field: "username", headerName: "Title", width: 200 },
  { field: "_id", headerName: "ID", width: 300 },
  { field: "email", headerName: "Sizes", width: 200 },
];

const Users = () => {
  //variables
  const [rows, setRows] = useState();
  const [deletedRowsIds, setDeletedRowsIds] = useState([]);
  const { accessToken } = useSelector((state) => state.user.currentUser);
  const [response, setResponse] = useState({ done: false });
  //handlers
  const handleSelection = (rowsSelected) => {
    setDeletedRowsIds(rowsSelected);
    console.log(rowsSelected);
  };
  const handleDelete = () => {
    deletedRowsIds.forEach((rowId) => {
      deleteUser(rowId);
    });
  };
  //async functions
  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:9898/api/users/", {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      });
      console.log("fetched Data", res.data);
      setRows(res.data.filter((user) => user.isAdmin === false).reverse());
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(
        `http://localhost:9898/api/users/${userId}`,
        {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res);
      setResponse({ done: true });
    } catch (err) {
      console.log(err);
      setResponse({ done: false });
    }
  };
  //useEffects
  useEffect(() => {
    getUsers();
    console.log(response);
  }, [response]);
  return (
    <>
      <NavMenu />
      <Container>
        <Wrapper>
          <h1>Users</h1>
          <div
            style={{
              height: 700,
              width: "100%",
              fontSize: "200px",
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              onSelectionModelChange={handleSelection}
              getRowId={(row) => row._id}
              sx={{ fontSize: "15px", fontWeight: "700" }}
            />
          </div>
          <div>
            <Button
              sx={{
                bgcolor: "#060b26",
                "&:hover": {
                  bgcolor: "#1a83ff",
                },
              }}
              variant="contained"
              onClick={handleDelete}
              color="error"
            >
              Delete Selected Rows
            </Button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default Users;
