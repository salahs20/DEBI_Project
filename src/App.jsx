import React, { useEffect, useState } from "react";
import AdminLayout from "./Components/AdminLayout";
import UserLayout from "./Components/UserLayout";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

const App = () => {
 
  const [allUsers, setAllUsers] = useState([]);
  const getAllUsers = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/users`,
    }).then((auser) => {
      setAllUsers(auser.data);
    });
    
  };
  useEffect(() => {
      getAllUsers;
    }, []);
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserLayout allUsers={allUsers} />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </>
  );
};

export default App;
