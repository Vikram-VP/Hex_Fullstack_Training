const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/admin");

// Add User
exports.adduser = async (req, res) => {
  try {
    const { name, city, username, password, role } = req.body;
    let salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = new User({ 
      name, 
      city, 
      username, 
      password: hashedPassword, 
      role,
      cv: req.files?.cv?.[0]?.path || null, 
      profilepic: req.files?.profilepic?.[0]?.path || null
    });

    user = await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log({ msg: "Error in API: " + err.message });
    res.status(500).json({ msg: "Server error" });
  }
};

// User Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ msg: "Invalid Credentials" });

    const SECRET_KEY = "15111983200722";
    let userObj = { username: user.username, role: user.role };
    
    const token = jwt.sign(userObj, SECRET_KEY, { expiresIn: "20h" });
    res.status(200).json({ token });
  } catch (err) {
    console.log({ msg: "Error in API: " + err.message });
    res.status(500).json({ msg: "Server error" });
  }
};

// Get All Users with Pagination
exports.getallUsers = async (req, res) => {
  try {
    let { page, size } = req.query;
    page = parseInt(page) || 1;
    size = parseInt(size) || 2;

    let skip = (page - 1) * size;

    const users = await User.find().skip(skip).limit(size);
    let totalRecords = await User.countDocuments();
    let totalPages = Math.ceil(totalRecords / size);

    res.json({
      totalRecords,
      totalPages,
      currentPage: page,
      data: users
    });
  } catch (err) {
    res.status(500).json({ msg: "Server error: " + err.message });
  }
};

// Get User by ID
exports.getUserById = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: "Server error: " + err.message });
  }
};

// Get Users by City
exports.getByCity = async (req, res) => {
  try {
    let city = req.params.city;
    let users = await User.find({ city });

    if (!users.length)
      return res.status(404).json({ msg: "No users found in this city" });

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ msg: "Server error: " + err.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    let user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Server error: " + err.message });
  }
};
