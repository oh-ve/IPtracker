import { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";

export default function IPTracker(props) {
  return (
    <div id="iptracker">
      <h1>Who the fuck am I?</h1>
      <p>Idk but here's your IP address:</p>
      <p>{props.userIP}</p>
    </div>
  );
}
