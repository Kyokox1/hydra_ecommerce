import React from "react";
import Login from "./Login";
import SignIn from "./SignIn";
import "../components/home/home.css";

//redux
import { useSelector } from "react-redux";

const Home = () => {
  const estado = useSelector((state) => state.sign);
  return (
    <div className="home">
      <Login />
      <div className="home-registrar">{estado.estado ? <SignIn /> : <></>}</div>
    </div>
  );
};

export default Home;
