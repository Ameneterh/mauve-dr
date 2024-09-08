import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { fullname, email, password } = req.body;

  if (
    !fullname ||
    !email ||
    !password ||
    fullname === " " ||
    email === " " ||
    password === " "
  ) {
    return res.status(400).json({ message: "All fields are required" });
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
    res.status(500).json({ message: error.message });
  }
};
