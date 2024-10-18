import React from "react";
import Products from "../../Component/Products";


const Home = ({products}) => {
  return <>
      <div>
        
      </div>
  <div className="flex flex-col justify-center items-center w-full p-8 ">
      <h1 className="text-3xl text-green-700">Home Products</h1>
      <div className="flex justify-evenly w-full item-center p-4 flex-wrap my-4 gap-y-5 ">
        {products.map((product, id) => (
          <Products product={product} key={id} />
        ))}
      </div>
    </div>
  </>;
};

export default Home;
