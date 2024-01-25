import axios from 'axios';

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
  return instance;
};

export const instance = getAxiosInstans('application/json');
export const instanceForm = getAxiosInstans('multipart/form-data');
