const axios = require("axios");

const HttpError = require("../models/http-error");

const { ACCESS_TOKEN } = process.env;

async function getCoordsForAddress(address) {
  const url = "https://api.mapbox.com/geocoding/v5";
  const endpoint = "mapbox.places";
  const searchText = encodeURIComponent(address);
  const constructedUrl = `${url}/${endpoint}/${searchText}.json/?access_token=${ACCESS_TOKEN}`;

  const response = await axios({ method: "GET", url: constructedUrl })
    .then((resp) => {
      if (!resp.data) {
        const error = new HttpError(
          "Could not find location for the specified address.",
          422
        );
        throw error;
      }

      return resp.data.features;
    })
    .then((features) => {
      const [lng, lat] = features[0].center;

      return { lat, lng };
    })
    .catch((err) => {
      next(err);
    });

  return response;
}

module.exports = getCoordsForAddress;
