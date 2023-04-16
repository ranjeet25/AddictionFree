const express = require("express");
const router = express.Router(); // Instance of Router in Express
const path = require("path");
const UserModel = require("../models/User");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/register.html"));
});

router.post("/", (req, res) => {
  UserModel.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  }).then((result) => {
    console.log(result);
    if (result) {
      // res.sendFile(path.join(__dirname, "../pages/submit.html"));
      res.send("<h4>User Already Exits !!</h4>");
    } else {
      UserModel.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        role: req.body.role,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      }).then((result) => {
        res.status(200);
        res.sendFile(path.join(__dirname, "../pages/submit.html"));
      });
    }
  });
});

module.exports = router;
