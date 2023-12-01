import axios from 'axios';

const getAxiosInstans = (type: string) => {
  const config = {
    baseURL: 'http://115.85.183.75:8080/',
    headers: {
      'Content-Type': type,
    },
    origin: 'http://115.85.183.75:8080/',
    withCredentials: true,
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 2500;
  return instance;
};

export const instance = getAxiosInstans('application/json');
export const instanceForm = getAxiosInstans('multipart/form-data');
