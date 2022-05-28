import axios from 'axios';
import type { AxiosSuccesResponse, Point, User } from '../models';
import type { RegisterUser } from '../schemas';
import { loadAbort } from '../utilities';
import { API } from '../core/constants';

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

export const registerUser = (body: RegisterUser) => {
  const controller = loadAbort();
  return {
    call: axios.post<AxiosSuccesResponse<User>>(
      `${API.BACKEND}/users/register`,
      {
        ...body,
        role: 'recycler',
      },
      {
        signal: controller.signal,
        headers: {
          'content-type': 'application/json',
        },
      }
    ),
    controller,
  };
};
