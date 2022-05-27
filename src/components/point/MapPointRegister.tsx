import { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet';

interface MapPointRegisterProps {
  // eslint-disable-next-line no-unused-vars
  changePointSelected: (a: number, b: number) => void;
}

const MapMarkerCurrenty = ({ changePointSelected }: MapPointRegisterProps) => {
  const [position, setPosition] = useState<LatLngExpression>([0, 0]);
  const map = useMapEvents({
    mouseover() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      changePointSelected(e.latlng.lat, e.latlng.lng);
    },
    click(e) {
      setPosition(e.latlng);
      changePointSelected(e.latlng.lat, e.latlng.lng);
    },
  });

  return <Marker position={position} />;
};

export const MapPointRegister = ({
  changePointSelected,
}: MapPointRegisterProps) => (
  <MapContainer
    className="h-[350px] w-full"
    center={[-12.046374, -77.042793]}
    zoom={17}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <MapMarkerCurrenty changePointSelected={changePointSelected} />
  </MapContainer>
);

//

// useEffect(() => {
//   navigator.geolocation.getCurrentPosition((position) => {
//     const { latitude, longitude } = position.coords;
//     setInitialPositionMap([latitude, longitude]);
//   });
// }, []);
