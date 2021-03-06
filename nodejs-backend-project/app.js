require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");
const HttpError = require("./models/http-error");
const {getCoordsForAddress} = require("./util/location");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

/* try {
  let coords = await getCoordsForAddress("https://ancientworldwonders.com/uploads/Pyramids_of_Giza.jpg");
  console.log(coords);
} catch(err) {
  console.log(err);
} */

getCoordsForAddress("https://ancientworldwonders.com/uploads/Pyramids_of_Giza.jpg").then().catch();

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
