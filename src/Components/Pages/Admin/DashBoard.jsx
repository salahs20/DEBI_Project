import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Product Name", "Action",""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
   
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    
  },
  {
    name: "Michael Levi",
    job: "Developer",
   
  },
  {
    name: "Richard Gran",
    job: "Manager",
   
  },
];
const DashBoard = () => {
  return (
    <div className="text-center  flex flex-col justify-center items-center gap-8">
        <h1 className="pt-8 text-lime-900 text-[2rem]">DashBoard</h1>
        <Button color="green"> Add New Product</Button>
     <div className="px-8 w-full">
     <Card className=" w-full overflow-y-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead className="text-center">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {TABLE_ROWS.map(({ name, job, date }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {job}
                </Typography>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
     </div>
    </div>
  );
};

export default DashBoard;
