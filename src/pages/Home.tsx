import { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

const MyPositionMarker = () => {
  const [position, setPosition] = useState<LatLngExpression>([0, 0]);
  const map = useMapEvents({
    mouseover() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return <Marker position={position} />;
};

export const Home = () => (
  <main className="main">
    <MapContainer
      className="h-full w-full"
      center={[-12.046374, -77.042793]}
      zoom={17}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MyPositionMarker />
    </MapContainer>
  </main>
);
