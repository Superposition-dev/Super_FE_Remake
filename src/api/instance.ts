import { getCookie, removeCookie, setCookie } from '@/util/cookie';
import axios, { AxiosError } from 'axios';
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
    response => response,
    async error => {
      console.log(error);
      const originalRequest = error.config;
      if(error.response?.status === 400) {
        removeCookie('accessToken', { path: '/' });
        window.alert('로그인이 필요한 서비스입니다.');
        window.location.href = '/';
      }
      if (error.response?.status === 401) {
        isRefreshing = true;
        try {
          const res = await instance.get(`${process.env.NEXT_PUBLIC_BASE_URL}/users/regenerateToken`);
          const { accessToken } = res.data;
          await removeCookie('accessToken');
          setCookie('accessToken', accessToken, { path: '/' });
          originalRequest.headers['Authorization'] = 'Bearer ' + accessToken;
          failedQueue.forEach((request: any) => request.resolve(accessToken));
          return instance(originalRequest);
        } catch (err:any) {
          if(err.response.status === 400 || err.response.status === 403) {
            removeCookie('accessToken', { path: '/' });
            window.alert('세션이 만료도었습니다. 다시 로그인 해주세요.');
            window.location.href = '/';
          }
          failedQueue.forEach((request:any) => request.reject(error));
          failedQueue = [];
        } finally {
          isRefreshing = false;
        }
        if (isRefreshing) {
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then(token => {
              console.log(token);
              originalRequest.headers['Authorization'] = 'Bearer ' + token;
              return instance(originalRequest);
            })
            .catch(err => {
              return Promise.reject(err);
            });
        }
      }
      return Promise.reject(error);
  }
  )
  return instance;
};

export const instance = getAxiosInstans('application/json');
export const instanceForm = getAxiosInstans('multipart/form-data');
