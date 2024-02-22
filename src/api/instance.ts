import { getCookie, removeCookie, setCookie } from '@/util/cookie';
import axios from 'axios';
let isRefreshing = false;
let failedQueue: any = [];

const getAxiosInstans = (type: string) => {
  const config = {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
      'Content-Type': type,
    },
    origin: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true,
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 2500;
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      console.log(error);
      const originalRequest = error.config;
      if (error.response?.status === 401) {
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then((token) => {
              originalRequest.headers['Authorization'] = 'Bearer ' + token;
              return instance(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }
        isRefreshing = true;
        try {
          const refresh = getCookie('refreshToken');
          const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/regenerateToken`);
          const { accessToken } = res.data;
          await removeCookie('accessToken');
          setCookie('accessToken', accessToken, { path: '/' });
          originalRequest.headers['Authorization'] = 'Bearer ' + accessToken;
          failedQueue.forEach((request: any) => request.resolve(accessToken));
          return instance(originalRequest);
        } catch (err) {
          failedQueue.forEach((request: any) => request.reject(error));
          failedQueue = [];
        } finally {
          isRefreshing = false;
        }
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export const instance = getAxiosInstans('application/json');
export const instanceForm = getAxiosInstans('multipart/form-data');
