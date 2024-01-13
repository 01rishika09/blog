import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/store";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("bdb");
      const { data } = await axios.post(
        "/api/v1/user/login",
        {
          email: inputs.email,
          password: inputs.password,
        }
      );
      // console.log(data);
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        // localStorage.setItem("rights", data?.user.permission);
        // console.log("uhf");
        localStorage.setItem("rights", JSON.stringify(data.user.roles[0]));
        localStorage.setItem("user", JSON.stringify(data));
        console.log("user");
        localStorage.getItem(data.user.roles[0].role);
        dispatch(authActions.login());
        if (data.user.roles[0].role === "Viewer") {
          navigate("/blogs");
        }
        alert("User Login Successfully");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            varient="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
          >
            Login
          </Typography>

          <TextField
            placeholder="email"
            value={inputs.email}
            onChange={handleChange}
            name="email"
            margin="normal"
            type={"email"}
            required
          />

          <TextField
            placeholder="password"
            value={inputs.password}
            onChange={handleChange}
            name="password"
            margin="normal"
            type={"password"}
            required
          />



          <Button
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            varient="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/register")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Not a user ? Register
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Login;
