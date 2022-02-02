const generateAccessToken = require("../../helper/generateAccessToken");
const { getUsersById } = require("../../models/usersModel");

async function login(req, res) {
  try {
    let user = await getUsersById(req.body.username);

    if (!user) {
      return res.status(400).json({
        message: "Username tidak ada",
      });
    }

    if (user.password !== req.body.password) {
      return res.status(400).json({
        message: "Password salah",
      });
    }

    delete user.password;

    let accessToken = await generateAccessToken(user);

    return res.status(200).json({
      message: "Login berhasil",
      data: accessToken,
    });
  } catch (error) {
    return res.status(300).json({
      message: error.message,
    });
  }
}

module.exports = login;
