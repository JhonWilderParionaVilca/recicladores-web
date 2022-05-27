import { Marker, Popup } from 'react-leaflet';
import type { Point } from '../../models';

interface MarkerPointProps {
  point: Point;
}
export const MarkerPoint = ({ point }: MarkerPointProps) => (
  <Marker position={[point.latitude, point.longitude]}>
    <Popup>
      <div className="flex flex-col items-end w-full h-full ">
        <img
          className="object-cover w-full h-4/5"
          src={point.image}
          alt={point.name}
        />
        <p className="flex-1 text-base font-extrabold uppercase text-primary-700">
          {point.name}
        </p>
        <ul className="flex flex-col flex-1 w-full">
          <li>
            <a
              href={`https://api.whatsapp.com/send?phone=51902297178&text=%E2%9C%8BHola%20${point.name}%2C%20quiero%20contactarlos`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 w-full mb-3 text-center btn btn--primary"
            >
              WhatsApp
            </a>
          </li>

          <li>
            <a
              href={`mailto:${point.email}?Subject=Interesado%20en%20contactarlo`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 w-full mb-3 text-center btn btn--red"
            >
              Correo
            </a>
          </li>
        </ul>
      </div>
    </Popup>
  </Marker>
);
