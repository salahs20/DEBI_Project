import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
const Products = ({ product }) => {
  return (
    <>
      <div>
        <Card className="mt-6 w-80  ">
          <CardHeader
            color="blue-gray"
            className="flex justify-center items-center"
          >
            <img width="100%" src={product.imageCover} alt="card-image" />
          </CardHeader>
          <CardBody>
            <div className="mb-2">
              <h1 className="text-xl">{product.title.slice(0, 15)}....</h1>
            </div>
            <div className="flex justify-between ">
              <div className="text-green-700">{product.price} EGP</div>
              <div className="text-yellow-800">⭐ {product.ratingsAverage} </div>
            </div>
          </CardBody>
          <Button color="green" className="m-auto w-10/12 mb-5 ">Add To Cart</Button>
        </Card>
      </div>
    </>
  );
};

export default Products;
