const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const findUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    if (user === null)
      res.status(201).json({ succes: false, msg: "User do not exist" });
    else res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userEmail = await User.findOne({ email: email });
    if (userEmail === null) {
      return res
        .status(201)
        .json({ success: false, msg: "user doesn't exist" });
    }
    const user = await User.findOne({ email: email, password: password });
    if (user === null) {
      return res
        .status(201)
        .json({ success: false, msg: "the data is incorrect" });
    }
    res.status(201).json({ succes: true, user });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};
module.exports = {
  createUser,
  findUser,
  login,
};
