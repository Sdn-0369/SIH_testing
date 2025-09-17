import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { type LatLngExpression, type LatLngBoundsExpression } from "leaflet";

const SatelliteMap = () => {
  const initialPosition: LatLngExpression = [20.0, 60.0];
  const worldBounds: LatLngBoundsExpression = [
    [-90, -180],
    [90, 180],
  ];

  return (
    <MapContainer
      center={initialPosition}
      zoom={3}
      minZoom={3}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
      maxBounds={worldBounds}
      maxBoundsViscosity={1.0}
      className="rounded-xl border-2 border-white"
    >
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution="Tiles &copy; Esri"
        noWrap={true}
      />
    </MapContainer>
  );
};

export default SatelliteMap;
