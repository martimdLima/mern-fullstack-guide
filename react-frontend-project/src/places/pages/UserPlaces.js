import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import DPLACES from "./DummyPlaces";

const DUMMY_PLACES = DPLACES;

const UserPlaces = () => {
  // will return an object which has your dynamic segments as properties
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
