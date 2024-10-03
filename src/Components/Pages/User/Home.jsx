import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      
      <Button><Link to="admin/">DashBoard</Link></Button>
    
    </>
  );
};

export default Home;
