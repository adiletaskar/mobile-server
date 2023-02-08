const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const { email } = req.body;

    const userEmail = await User.findOne({ email: email });
    if (userEmail !== null) {
      return res
        .status(201)
        .json({ success: false, msg: "user already exist" });
    }
    const user = await User.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, msg: error });
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
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

const findUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    if (user === null)
      res.status(201).json({ success: false, msg: "User do not exist" });
    else res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

//likes
const updateLikes = async (req, res) => {
  try {
    const { likes } = req.body;
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { $set: { likes: likes } });
    if (user) res.status(201).json({ success: true });
    else res.status(201).json({ success: false, msg: "something is wrong" });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};
//cart
const updateCart = async (req, res) => {
  try {
    const { cart } = req.body;
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, { $set: { cart: cart } });
    if (user) res.status(201).json({ success: true });
    else res.status(201).json({ success: false, msg: "something is wrong" });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};
const increment = async (req, res) => {
  try {
    const { userId, productId } = req.query;
    const { cart } = await User.findById(userId);

    let newCart = cart.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    const updateCart = await User.updateOne({
      $set: { cart: newCart },
    });
    if (updateCart) return res.status(201).json({ success: true });
    res.status(201).json({ success: false, msg: "something is wrong" });
  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};
const decrement = async (req, res) => {
  try {
    const { userId, productId } = req.query;
    const { cart } = await User.findById(userId);

    let newCart = cart.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    const updateCart = await User.updateOne({
      $set: { cart: newCart },
    });
    if (updateCart) return res.status(201).json({ success: true });
    res.status(201).json({ success: false, msg: "something is wrong" });
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
  updateLikes,
  updateCart,
  increment,
  decrement,
};
