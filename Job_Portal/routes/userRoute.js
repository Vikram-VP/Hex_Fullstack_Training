const express = require("express");
const { adduser, login, getallUsers, getByCity, deleteUser, getUserById } = require("../controllers/usercontroller");

const router = express.Router();

router.post("/add", adduser);
router.post("/login", login);
router.get("/getall", getallUsers);
router.get("/getByCity/:city", getByCity);
router.get("/getById/:id", getUserById);
router.delete("/delete/:id", deleteUser);

module.exports = router;
