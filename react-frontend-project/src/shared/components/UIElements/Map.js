import React, { useRef, useEffect, useState } from "react";

import mapboxgl from "mapbox-gl";

import "./Map.css";


mapboxgl.accessToken =
  "{MAPBOX_API_TOKEN}";

const Map = (props) => {

  const [setChangeLayer] = useState('');

  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [props.coordinates.long, props.coordinates.lat],
      zoom: 12.5,
    });

    // e.point is the x, y coordinates of the mousemove event relative
    // to the top-left corner of the map
    // e.lngLat is the longitude, latitude geographical position of the event
    map.on("mousemove", function (e) {
      document.getElementById("info").innerHTML =
        "<br />" + JSON.stringify(e.point) + JSON.stringify(e.lngLat.wrap());
    });

    new mapboxgl.Marker()
      .setLngLat([props.coordinates.long, props.coordinates.lat])
      .addTo(map);

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    ////////

    const layerList = document.getElementById('menu');
    const inputs = layerList.getElementsByTagName('input');
     
    function switchLayer(layer) {
    let layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
     
    for (let i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
    }

    ///////////



    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <pre id="info"></pre>
      <div className="map-container" ref={mapContainerRef} />
      <div id="menu">
        <input
          id="streets-v11"
          type="radio"
          name="rtoggle"
          value="streets"
          onChange={(layer) => setChangeLayer(layer.target.value)}
        />
        <label htmlFor="streets-v11">streets</label>
        <input id="light-v10" type="radio" name="rtoggle" value="light" />
        <label htmlFor="light-v10">light</label>
        <input id="dark-v10" type="radio" name="rtoggle" value="dark" />
        <label htmlFor="dark-v10">dark</label>
        <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors" />
        <label htmlFor="outdoors-v11">outdoors</label>
        <input
          id="satellite-v9"
          type="radio"
          name="rtoggle"
          value="satellite"
        />
        <label htmlFor="satellite-v9">satellite</label>
      </div>
    </React.Fragment>
  );
};

export default Map;





/* 
const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
let layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}
 */































/* class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      long: props.coordinates.long,
      lat: props.coordinates.lat,
      zoom: 12,
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.long, this.state.lat],
      zoom: this.state.zoom,
    });

    map.on("move", () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  results = (props) => {

    let coordinates = props.coordinates;

      const results = fetchFakeData({coordinates});
      console.log(results);
  }
  render() {
    return (
      <div
      className="map-container"
        id="map"
      />
    );
  }
} */
