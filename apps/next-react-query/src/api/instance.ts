import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import Axios, { AxiosError } from 'axios';

export const AXIOS_INSTANCE = Axios.create({
  baseURL: 'https://petstore.swagger.io/v2',
});

// 토큰 필요 시
// AXIOS_INSTANCE.interceptors.request.use((config) => {
//   const token = localStorage.getItem('accessToken');
//   if (token && config.headers) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// });

export const instance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then((response: AxiosResponse<T>) => response.data);

  (promise as Promise<T> & { cancel: () => void }).cancel = () => {
    source.cancel('Query was cancelled');
  };

  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;
