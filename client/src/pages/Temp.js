import axios from "axios";
import { useEffect, useState } from "react";

const REGISTER_URL = "/api/auth/register";

const Temp = () => {
  useEffect(() => {
    axios
      .create({
        baseURL: "http://localhost:9898",
      })
      .post(REGISTER_URL, {
        username: "delete",
        password: "1234",
        email: "delete@gmail.com",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return <div>Temp</div>;
};

export default Temp;
