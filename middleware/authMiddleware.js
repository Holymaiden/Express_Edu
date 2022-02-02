const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const header = req.headers.authorization;

  if (!header || header === "" || header === undefined) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }

  const token = header.split(" ")[1];

  return jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Auth failed",
      });
    }
    next();
  });
}

module.exports = authMiddleware;
