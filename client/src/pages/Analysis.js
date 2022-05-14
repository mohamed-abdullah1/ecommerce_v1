import { Char as ChartJS } from "chart.js/auto";
import { Bar, Line, Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import useFetch from "../components/customHooks/useFetch";
import { Container } from "./stylesAdmin/Analysis.styled";
import NavMenu from "./NavMenu";

const Analysis = () => {
  const { accessToken } = useSelector((state) => state.user.currentUser);
  const { data: orders } = useFetch("http://localhost:9898/api/orders/", {
    headers: { token: `Bearer ${accessToken}` },
  });
  const { data: users } = useFetch("http://localhost:9898/api/users/", {
    headers: {
      token: `Bearer ${accessToken}`,
    },
  });
  console.log("xxx", accessToken);
  const ordersInMonth = (month) =>
    orders?.filter((order) => order.createdAt.slice(5, 7) === month).length;
  const usersInMonth = (month) =>
    users?.filter((user) => user.createdAt.slice(5, 7) === month).length;

  const dataOrders = {
    labels: ["april", "may", "june", "july", "august"],
    datasets: [
      {
        label: "Orders per month",
        data: [
          ordersInMonth("04"),
          ordersInMonth("05"),
          ordersInMonth("06"),
          ordersInMonth("07"),
          ordersInMonth("08"),
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgb(255, 79, 132)",
      },
    ],
  };
  const dataUsers = {
    labels: ["april", "may", "june", "july", "august"],
    datasets: [
      {
        label: "Users per month",
        data: [
          usersInMonth("04"),
          usersInMonth("05"),
          usersInMonth("06"),
          usersInMonth("07"),
          usersInMonth("08"),
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#B2BEB5",
      },
    ],
  };
  const dataOrdersPie = {
    labels: ["april", "may", "june", "july", "august"],
    datasets: [
      {
        label: "Orders per month",
        data: [
          ordersInMonth("04"),
          ordersInMonth("05"),
          ordersInMonth("06"),
          ordersInMonth("07"),
          ordersInMonth("08"),
        ],
        borderColor: "rgba(0, 0, 0, 0.15)",
        backgroundColor: [
          "#9F2B68",
          "#FFC300",
          "#DAF7A6  ",
          "#E5E4E2",
          "#FF5733  ",
        ],
      },
    ],
  };
  return (
    <>
      <NavMenu />
      <Container>
        <div
          style={{
            width: 500,
            height: 300,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            padding: 20,
          }}
        >
          <Line data={dataOrders} />
        </div>
        <div
          style={{
            width: 500,
            height: 300,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            padding: 20,
          }}
        >
          <Bar data={dataUsers} />
        </div>
        <div
          style={{
            width: 500,
            height: 500,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            padding: 20,
            marginTop: "-90px",
          }}
        >
          <Pie data={dataOrdersPie} />
        </div>
      </Container>
    </>
  );
};

export default Analysis;
