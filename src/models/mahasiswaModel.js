const connection = require("../../config/database");

async function getAll() {
  return connection.select("*").from("mahasiswa");
}

module.exports = { getAll };
