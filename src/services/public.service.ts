import axios from 'axios';
import { API } from '../core/constants/apis';
import { AxiosSuccesResponse } from '../models/axios';
import { Point } from '../models/point';
import { loadAbort } from '../utilities/loadAbort';

export const getPoints = (query: string) => {
  const controller = loadAbort();
  return {
    call: axios.get<AxiosSuccesResponse<Point[]>>(
      `${API.BACKEND}/collectors?${query}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
