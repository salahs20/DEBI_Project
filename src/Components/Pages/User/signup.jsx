// import React, { useState } from "react";
// import {
//   Card,
//   Input,
//   Button,
//   Typography,
//   Select,
//   Option,
// } from "@material-tailwind/react";
// import axios from "axios";
// // import { v4 as uuidv4 } from "uuid"; // Ensure uuid is imported
// import { useNavigate } from "react-router-dom";

// const SignUp = ({ allUsers }) => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: "",
//     name: "",
//     password: "",
//     gender: "",
//     role: "user",
//   });
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let isValid = true;
//     let newErrors = {};

//     if (!user.email) {
//       newErrors.email = "Email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(user.email)) {
//       newErrors.email = "Email is invalid";
//       isValid = false;
//     }

//     if (!user.name) {
//       newErrors.name = "Name is required"; // Use 'name' here
//       isValid = false;
//     }

//     if (!user.password) {
//       newErrors.password = "Password is required";
//       isValid = false;
//     } else if (user.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//       isValid = false;
//     }

//     if (!user.confirmPassword) {
//       newErrors.confirmPassword = "Confirm Password is required";
//       isValid = false;
//     } else if (user.password !== user.confirmPassword) {
//       newErrors.confirmPassword = "Passwords do not match";
//       isValid = false;
//     }

//     if (!user.gender) {
//       newErrors.gender = "Gender is required";
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const existingUser = allUsers.find((u) => u.email === user.email);
//         if (existingUser) {
//           setErrors({ ...errors, email: "This email is already registered" });
//         } else {
//           const newUser = {
//             ...user,
//             id: uuidv4(),
//           };
//           delete newUser.confirmPassword;
//           const response = await axios.post(
//             import.meta.env.VITE_Users,
//             newUser
//           );
//           console.log("User registered:", response.data);
//           navigate("/");
//         }
//       } catch (error) {
//         console.error("Error registering user:", error);
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <Card
//         color="transparent"
//         shadow={false}
//         className="p-8 bg-white rounded-xl"
//       >
//         <Typography variant="h4" color="blue-gray" className="mb-4">
//           Sign Up
//         </Typography>
//         <form
//           onSubmit={handleSubmit}
//           className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
//         >
//           <div className="mb-4 flex flex-col gap-6">
//             <div>
//               <Input
//                 size="lg"
//                 label="Email"
//                 value={user.email}
//                 onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 error={errors.email}
//               />
//               {errors.email && (
//                 <Typography color="red" className="mt-1 text-xs">
//                   {errors.email}
//                 </Typography>
//               )}
//             </div>

//             <div>
//               <Input
//                 size="lg"
//                 label="Username"
//                 value={user.name} // Correct to 'name'
//                 onChange={(e) => setUser({ ...user, name: e.target.value })} // Update user 'name'
//                 error={errors.name}
//               />
//               {errors.name && (
//                 <Typography color="red" className="mt-1 text-xs">
//                   {errors.name}
//                 </Typography>
//               )}
//             </div>

//             <div>
//               <Input
//                 type="password"
//                 size="lg"
//                 label="Password"
//                 value={user.password}
//                 onChange={(e) => setUser({ ...user, password: e.target.value })}
//                 error={errors.password}
//               />
//               {errors.password && (
//                 <Typography color="red" className="mt-1 text-xs">
//                   {errors.password}
//                 </Typography>
//               )}
//             </div>

//             <div>
//               <Input
//                 type="password"
//                 size="lg"
//                 label="Confirm Password"
//                 value={user.confirmPassword}
//                 onChange={(e) =>
//                   setUser({ ...user, confirmPassword: e.target.value })
//                 }
//                 error={errors.confirmPassword}
//               />
//               {errors.confirmPassword && (
//                 <Typography color="red" className="mt-1 text-xs">
//                   {errors.confirmPassword}
//                 </Typography>
//               )}
//             </div>

//             <div>
//               <Select
//                 label="Gender"
//                 value={user.gender}
//                 onChange={(value) => setUser({ ...user, gender: value })}
//                 error={errors.gender}
//               >
//                 <Option value="male">Male</Option>
//                 <Option value="female">Female</Option>
//               </Select>
//               {errors.gender && (
//                 <Typography color="red" className="mt-1 text-xs">
//                   {errors.gender}
//                 </Typography>
//               )}
//             </div>
//           </div>
//           <Button color="green" type="submit" className="mt-6" fullWidth>
//             Sign Up
//           </Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";
// import { v4 as uuidv4 } from "uuid"; // Ensure uuid is imported
import { useNavigate } from "react-router-dom";

const SignUp = ({ allUsers }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    gender: "",
    role: "user",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!user.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!user.name) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!user.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!user.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      isValid = false;
    } else if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!user.gender) {
      newErrors.gender = "Gender is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const existingUser = allUsers.find((u) => u.email === user.email);
        if (existingUser) {
          setErrors({ ...errors, email: "This email is already registered" });
        } else {
          const newUser = {
            ...user,
            id: uuidv4(),
          };
          delete newUser.confirmPassword;

          // Add new user to the database (db.json)
          const response = await axios.post(
            "/users", // Assuming your API for saving data is at /users
            newUser
          );

          console.log("User registered:", response.data);
          setSuccessMessage("Registration completed successfully!");

          // Simulate a short delay before navigating to the login page
          setTimeout(() => {
            navigate("/login"); // Navigate to login page after showing the success message
          }, 2000);
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        color="transparent"
        shadow={false}
        className="p-8 bg-white rounded-xl"
      >
        <Typography variant="h4" color="blue-gray" className="mb-4">
          Sign Up
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <div>
              <Input
                size="lg"
                label="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                error={errors.email}
              />
              {errors.email && (
                <Typography color="red" className="mt-1 text-xs">
                  {errors.email}
                </Typography>
              )}
            </div>

            <div>
              <Input
                size="lg"
                label="Username"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                error={errors.name}
              />
              {errors.name && (
                <Typography color="red" className="mt-1 text-xs">
                  {errors.name}
                </Typography>
              )}
            </div>

            <div>
              <Input
                type="password"
                size="lg"
                label="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                error={errors.password}
              />
              {errors.password && (
                <Typography color="red" className="mt-1 text-xs">
                  {errors.password}
                </Typography>
              )}
            </div>

            <div>
              <Input
                type="password"
                size="lg"
                label="Confirm Password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                error={errors.confirmPassword}
              />
              {errors.confirmPassword && (
                <Typography color="red" className="mt-1 text-xs">
                  {errors.confirmPassword}
                </Typography>
              )}
            </div>

            <div>
              <Select
                label="Gender"
                value={user.gender}
                onChange={(value) => setUser({ ...user, gender: value })}
                error={errors.gender}
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
              {errors.gender && (
                <Typography color="red" className="mt-1 text-xs">
                  {errors.gender}
                </Typography>
              )}
            </div>
          </div>
          <Button color="green" type="submit" className="mt-6" fullWidth>
            Sign Up
          </Button>
        </form>
        {successMessage && (
          <Typography color="green" className="mt-4 text-center">
            {successMessage}
          </Typography>
        )}
      </Card>
    </div>
  );
};

export default SignUp;
