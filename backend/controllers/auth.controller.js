import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { fullname, email, password } = req.body;

  if (
    !fullname ||
    !email ||
    !password ||
    fullname === " " ||
    email === " " ||
    password === " "
  ) {
    next(errorHandler(400, "All fields are required!"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    fullname,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("New User Saved Successfully");
  } catch (error) {
    next(error);
  }
};
