import { useMap } from "react-leaflet";

export default function Location({ userPosition }) {
  const map = useMap();
  map.flyTo(userPosition, map.getZoom());
  return null;
}
