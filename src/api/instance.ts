import axios from 'axios';

const getAxiosInstans = (type: string) => {
  const config = {
    baseURL: 'http://61.97.186.40:8080',
    headers: {
      'Content-Type': type,
    },
    origin: 'http://61.97.186.40:8080',
    withCredentials: true,
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 2500;
  return instance;
};

export const instance = getAxiosInstans('application/json');
export const instanceForm = getAxiosInstans('multipart/form-data');
