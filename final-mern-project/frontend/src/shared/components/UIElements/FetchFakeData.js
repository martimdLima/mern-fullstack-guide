/**
 * A complete Coordinate Pair consisting of a latitude and longitude
 * @typedef {Object} CoordinatePair
 * @property {number} longitude - longitude coordinate
 * @property {number} latitude - latitude coordinate
 */

/**
 * Generates a GeoJSON FeatureCollection of random points based on
 * the center coordinates passed in.
 * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
 * @return {results} GeoJSON FeatureCollection
 */

const DUMMY_PLACES = [
    {
      id: 0,
      title: "StoneHenge",
      description: "A megalithic site",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
      address: "Salisbury SP4 7DE, United Kingdom",
      location: {
        lat: 51.1324452,
        long: -1.8852297,
      },
      creator: "u1",
    },
    {
      id: 1,
      title: "Giza Pyramics",
      description:
        "Largest of Egyptian pyramids in a complex also including temples & other Ancient artifacts",
      imageURL:
        "https://ancientworldwonders.com/uploads/Pyramids_of_Giza.jpg",
      address:
        "Al Haram, Nazlet El-Semman, Al Giza Desert, Giza Governorate, Egypt",
      location: {
        lat: 30.0167836,
        long: 31.1392395,
      },
      creator: "u2",
    },
  ];



/* const fetchFakeData = centerCoordinates => {
    const newFeaturesList = [];
    for (let i = 0; i < 20; i++) {
      const id = i;
      const { longitude, latitude } = getRandomCoordinate(centerCoordinates);
      newFeaturesList.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [longitude, latitude],
        },
        properties: {
          id,
          name: `Random Point #${id}`,
          description: `description for Random Point #${id}`,
        },
      });
    }
  
    return Promise.resolve({
      type: 'FeatureCollection',
      features: newFeaturesList,
    });
  }; */
  
  const fetchFakeData = placeCoordinates => {

    const newFeaturesList = [];

    for (let i = 0; i <= DUMMY_PLACES.length; i++) {
        console.log(DUMMY_PLACES[i]);
        const id = i;
        console.log(placeCoordinates);

        const { longitude, latitude } = {placeCoordinates};
       

        newFeaturesList.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          properties: {
            id,
            name: `Random Point #${id}`,
            description: `description for Random Point #${id}`,
          },
        });
      }
    
      return Promise.resolve({
        type: 'FeatureCollection',
        features: newFeaturesList,
      });
  };

  /**
   * Generates a random point within 0.025 radius of map center coordinates.
   * @param {CoordinatePair} centerCoordinates - the {@link CoordinatePair} for the map center
   * @return {CoordinatePair} randomly generated coordinate pair
   */
/*   const getRandomCoordinate = ({ longitude: centerLon, latitude: centerLat }) => {
    const r = 0.025 * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const latitude = centerLat + r * Math.cos(theta);
    const longitude = centerLon + r * Math.sin(theta);
    return { longitude, latitude };
  }; */

  const getRandomCoordinate = ({ longitude: centerLon, latitude: centerLat }) => {
    const latitude = centerLat;
    const longitude = centerLon;
    return { longitude, latitude };
  };
  
  export default fetchFakeData;