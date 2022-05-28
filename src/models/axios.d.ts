import { AxiosResponse } from 'axios';

export interface AxiosCall<T> {
  call: Promise<AxiosResponse<T>>;
  controller?: AbortController;
}

export interface AxiosSuccesResponse<T> {
  data: T;
  msg: string;
  status: true;
}

export interface AxiosErrorResponse {
  type: string;
  msg: string;
  status: true;
}
