import { LatLngExpression } from 'leaflet';
import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';

interface MyPositionMarkerProps {
  // eslint-disable-next-line no-unused-vars
  changePointSelected: (a: number, b: number) => void;
}

export const MyPositionMarker = ({
  changePointSelected,
}: MyPositionMarkerProps) => {
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
  });

  return <Marker position={position} />;
};
