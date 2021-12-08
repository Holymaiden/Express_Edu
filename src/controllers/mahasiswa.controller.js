const { getAll } = require("../models/mahasiswaModel");

async function getAllMahasiswa() {
  try {
    const data = getAll();
    return res.status(200).json({
      code: res.statusCode,
      message: "Success",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({ err: error.message });
  }
}

module.exports = { getAllMahasiswa };
