const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HttpError = require("../models/http-error");
const User = require("../models/user");
const { JWT_SERVER_KEY } = process.env;

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({ users: users.map((usr) => usr.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Invalid inputs passed, please verify your data",
      422
    );
    return next(error);
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Signup process failed, please try again later",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "The email you are trying to register already exists, please pick another",
      422
    );
    return next(error);
  }

  let hashedPwd;

  try {
    hashedPwd = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create the user, please try again later",
      500
    );
    return next(error);
  }

  const newUser = new User({
    name,
    email,
    image: req.file.path,
    password: hashedPwd,
    places: [],
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError(
      "Failed to signup the desired user, please try again later",
      500
    );
    return next(error);
  }

  let jwtToken;

  try {
    jwtToken = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      `${JWT_SERVER_KEY}`,
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  res
    .status(201)
    .json({ userId: newUser.id, email: newUser.email, token: jwtToken });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "The login process failed, please try again later",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Invalid credentials, please provide valid credentials for loggging in",
      403
    );
    return next(error);
  }

  let isValidPwd = false;

  try {
    isValidPwd = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not login, please provide valid credentials for loggging in",
      500
    );
    next(error);
  }

  if (!isValidPwd) {
    const error = new HttpError(
      "Could not login, please provide valid credentials for loggging in",
      403
    );
    next(error);
  }

  let jwtToken;

  try {
    jwtToken = jwt.sign(
      { userId: existingUser.id, email: existingUser.email },
      `${JWT_SERVER_KEY}`,
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  res.json({
    userId: existingUser.id,
    email: existingUser.email,
    token: jwtToken,
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
