import React, { useEffect, useState } from "react";
import Home from "./Pages/User/Home";
import Login from "./Pages/User/Login";
import SignUp from "./Pages/User/signup";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/User/AllProducts";
import axios from "axios";
const UserLayout = ({ allUsers }) => {
  const [isLoged, setIsLoged] = useState(false);
  const [products, setProduts] = useState([]);
  const [user, setUser] = useState(null);
  const getData = () => {
    axios({
      method: "get",
      url: import.meta.env.VITE_ALLProducts,
    }).then((data) => setProduts(data.data.data));
  };

  const getUserDetails = () => {
    axios({
      method: "get",
      url: `https://brainy-talented-jackal.glitch.me/users/${localStorage.ok}`,
    }).then((info) => setUser(info.data));
  };

  useEffect(() => {
    if (isLoged) {
      getUserDetails();
    }
  }, [isLoged]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header isLoged={isLoged} />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route
          path="login"
          element={
            <Login
              allUsers={allUsers}
              setIsLoged={setIsLoged}
              isLoged={isLoged}
            />
          }
        />
        <Route
          path="signup"
          element={<SignUp allUsers={allUsers} setIsLoged={setIsLoged} />}
        />
        <Route path="products" element={<AllProducts products={products} />} />
      </Routes>
    </>
  );
};
export default UserLayout;
