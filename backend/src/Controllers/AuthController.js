const jwt = require("jsonwebtoken");
const config = require("config");

const login = async (req, res, next) => {
  const { username, password } = req.body;
  res.status(200);
  return res.json({
    code: 200,
    data: {
      username,
      password
    },
    success: false
  });
};

const signup = async (req, res, next) => {
  console.log("req.vagi");
  const { username, password } = req.body;
  res.status(200);
  return res.json({
    code: 200,
    data: {
      username,
      password
    },
    success: true
  });
};

module.exports = {
  login,
  signup
};
