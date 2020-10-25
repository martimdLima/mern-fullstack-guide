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
  
  const fetchFakeData = placeCoordinates => {

    const newFeaturesList = [];

    for (let i = 0; i <= DUMMY_PLACES.length; i++) {
        const id = i;

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

  const getRandomCoordinate = ({ longitude: centerLon, latitude: centerLat }) => {
    const latitude = centerLat;
    const longitude = centerLon;
    return { longitude, latitude };
  };
  
  export default fetchFakeData;