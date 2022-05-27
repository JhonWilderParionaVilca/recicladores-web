import { Point } from '../models';
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */

// export interface createPointAdapterProp {
//   _id: string;
//   name: string;
//   image_url: string;
//   email: string;
//   phone: string;
//   items: string[];
//   location: {
//     type: 'Point';
//     coordinates: [number, number];
//   };
//   longitude: number;
//   latitude: number;
// }

export const createPointAdapter = (points: Array<any>): Point[] =>
  points.map((point) => ({
    id: point._id,
    image: point.image_url,
    name: point.name,
    email: point.email,
    phone: point.phone,
    latitude: point.location.coordinates[1],
    longitude: point.location.coordinates[0],
    items: point.items,
  }));
