import { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { createPointAdapter } from '../../adapters';
import { coordinatesAyacucho } from '../../core/constants';
import { useFetch } from '../../hooks';
import { Point } from '../../models/point';
import { getPoints } from '../../services';
import { MarkerPoint } from './MarkerPoint';
import { MyPositionMarker } from './MyPositionMarker';

interface MapViewProps {
  items: string[];
}

export const MapView = ({ items }: MapViewProps) => {
  const { callEndpoint } = useFetch();
  const [points, setPoints] = useState<Point[]>([]);

  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);

  const changePointSelected = (latitude: number, longitude: number) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  useEffect(() => {
    const getCollectors = async () => {
      if (items.length > 0) {
        const stringItems = items.join();
        const collectors = await callEndpoint(
          getPoints(
            `latitude=${latitude || coordinatesAyacucho.latitude}&longitude=${
              longitude || coordinatesAyacucho.longitude
            }&items=${stringItems}`
          )
        );
        const pointsAdapter = createPointAdapter(collectors.data.data);
        setPoints(pointsAdapter);
      } else {
        setPoints([]);
      }
    };
    getCollectors();
  }, [items, latitude, longitude]);

  return (
    <>
      <MapContainer
        className="flex-1 w-full h-full mb-8"
        center={[coordinatesAyacucho.latitude, coordinatesAyacucho.longitude]}
        zoom={17}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyPositionMarker changePointSelected={changePointSelected} />
        {points.map((point) => (
          <MarkerPoint key={point.id} point={point} />
        ))}
      </MapContainer>
    </>
  );
};
