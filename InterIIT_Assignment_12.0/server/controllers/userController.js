const User = require("../models/user");

const create_user = async (req, res) => {
  try {
    const { Name, Password, Email } = req.body;
    const existingAccount = await User.findOne({ Email: Email });
    const existingAccountCheck = existingAccount ? true : false;

    if (!existingAccountCheck) {
      const user = await User.create({
        Name,
        Password,
        Email,
      });
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User already exists" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const all_users = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const user_info = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await User.findOne({ Email: Email, Password: Password });
    if (user == null) {
      res.status(404).json({ message: "Cannot find customer" });
      return;
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create_user,
  user_info,
  all_users,
};
