const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const rolesModel = require("../models/rolesModel");

exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const role = req.body.role || "Viewer";

    const rolesData = await rolesModel.findOne({ role: role });
    console.log( "hello" , rolesData)
    const roles = [rolesData._id];

    if (!username || !email || !password) {
        return res.status(400).send({
          success: false,
          message: "Please Fill all fields",
        });
      }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        sucess: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      username,
      email,
      password: hashedPassword,
      roles,
    });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created",
      user,
      role,
      roles,
    });
    console.log(username);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error In Registration callback",
      success: false,
      error,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all users data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Get All Users",
      error,
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Please provide email or password",
      });
    }
    const user = await userModel.findOne({ email }).populate("roles");
    const roles = user.roles;
    console.log(roles);
    // // user.roles = role
    // const permissions = await rolesModel.findOne({role: roles[0]})

    if (!user) {
      return res.status(200).send({
        success: false,
        message: "email is not registered",
      });
    }
    console.log("user ", user);
    const isMatch = await bcrypt.compare(password, user.password);
    token = await user.generateAuthToken();
    console.log(token);

    // let userVer = await jwt.verify({_id:this.id}, process.env.SECRET_KEY)

    res.cookie("jwtoken", token, {
      expiers: new Date(Date.now() + 10),
      httpOnly: true,
    });

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or password",
      });
    }
    return res.status(200).send({
      success: true,
      message: "login successfully in login page",
      user,
      //   permissions: permission,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Login Callback",
      error,
    });
  }
};
