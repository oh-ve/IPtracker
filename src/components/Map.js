import { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function Maps(props) {
  console.log(props.userPosition);

  return (
    <div id="map">
      <h1>Where the fuck am I?</h1>
      <p>You are approximately here:</p>
      <MapContainer
        center={props.userPosition}
        zoom={0}
        scrollWheelZoom={true}
        style={{ height: "170px", margin: "auto", width: "300px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={props.userPosition}>
          <Popup>You are here.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
