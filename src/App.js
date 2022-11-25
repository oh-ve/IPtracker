import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import IPTracker from "./components/IPTracker";
import Map from "./components/Map";

export default function App() {
  // Setting up the initial state variables
  const [userIP, setUserIP] = useState();
  const [userPosition, setUserPosition] = useState([51.505, -0.09]);

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setUserIP(res.data.ip);
        setUserPosition([res.data.location.lat, res.data.location.lng]);
      });
  }, []);

  return (
    <div id="app">
      <IPTracker userIP={userIP} />
      <Map userPosition={userPosition} />
      <p>Hope that helps!</p>
    </div>
  );
}
