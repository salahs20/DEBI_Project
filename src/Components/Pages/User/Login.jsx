import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ allUsers }) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [checkUserName, setCheckUserName] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const reset = () => {
    setCheckUserName(false);
    setCheckPassword(false);
  };
  const handelForm = (e) => {
    e.preventDefault();
    if (user.userName == "") {
      reset();
      setCheckUserName(true);
    } else if (user.password == "") {
      reset();
      setCheckPassword(true);
    } else {
      const userInfo = {
        name: user.userName,
        password: user.password,
        gender: "",
      };
      axios({
        method: "post",
        url: `http://localhost:3000/users`,
        data: userInfo,
      });
    }
    const loginUser = allUsers.find(
      ({ name, password }) => user.name == name && user.password == password
    );
    if (loginUser) {
      localStorage.ok = loginUser.id;
      useNavigate("/");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center px-[4em] gap-[4em]">
      <div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Login{" "}
          </Typography>
          <form
            onSubmit={(e) => handelForm(e)}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-1 flex flex-col gap-6 justify-center">
              <Input
                error={checkUserName}
                label="User Name"
                value={user.userName}
                onChange={(e) =>
                  setUser({
                    ...user,
                    userName: e.target.value,
                  })
                }
              />
              <Input
                error={checkPassword}
                label="Password"
                type="password"
                placeholder="********"
                value={user.password}
                onChange={(e) =>
                  setUser({
                    ...user,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
