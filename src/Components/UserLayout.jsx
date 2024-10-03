import React, { useEffect, useState } from "react";
import Home from "./Pages/User/Home";
import Login from "./Pages/User/Login";

import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";

import AllProducts from "./Pages/User/AllProducts";
import axios from "axios";

const UserLayout = ({ allUsers }) => {
  const [allProducts, getAllProducts] = useState([]);
  // const baseUrl = `https://ecommerce.routemisr.com`;




  const [products, setProduts] = useState([]);


  const getData = () => {
    axios({
      method: "get",
      url: import.meta.env.VITE_ALLProducts,
    }).then((data) => setProduts(data.data.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login allUsers={allUsers} />} />
        <Route
          path="/products"
          element={<AllProducts products={products} />}
        />
      </Routes>
    </>
  );
};
export default UserLayout;
