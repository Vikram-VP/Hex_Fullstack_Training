const Admin = require("../models/admin");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  let { username, password } = req.body;
  let admin = await Admin.findOne({ username: username });
  if (admin) {
    let isValid = await bcrypt.compare(password, admin.password);
    if (!isValid)
      return res.status(400).json({ msg: "Invalid Credentials!!!!" });

    /** since i have verified username and password,
     * its time to generate the token */
    const SECRET_KEY = "15111983200722";
    let adminObj = {
      username: admin.username,
    };
    const token = jwt.sign(adminObj, SECRET_KEY, { expiresIn: "20h" });
    return res.json({
      token: token,
      role: admin.role,
    });
  }
  let user = await User.findOne({ username: username });
  if (user) {
    let isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return res.status(400).json({ msg: "Invalid Credentials!!!!" });
    
    const SECRET_KEY = "15111983200722";
    let employeeObj = {
      username: employee.username,
    };

    const token = jwt.sign(employeeObj, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token: token, role: employee.role });
  }

  return res.status(400).json({ msg: "Invalid Credentials!!!!" });
};
