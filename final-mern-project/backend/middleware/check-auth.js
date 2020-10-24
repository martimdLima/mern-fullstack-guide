const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");
const { JWT_SERVER_KEY } = process.env;

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    const jwtToken = req.headers.authorization.split(" ")[1];
    if (!jwtToken) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jwt.verify(jwtToken, `${JWT_SERVER_KEY}`);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 403);
    return next(error);
  }
};
