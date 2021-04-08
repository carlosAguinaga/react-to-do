import React from "react";
import { Redirect } from "react-router-dom";


const Home = () => {
  const token = localStorage.getItem("jwt");
  return token ? <Redirect to="/tasks" /> : <Redirect to="/login" />;
};

export default Home;
