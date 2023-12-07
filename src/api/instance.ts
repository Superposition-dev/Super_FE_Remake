import axios from 'axios';

const getAxiosInstans = (type: string) => {
  const config = {
    baseURL: 'https://api.spp-art.com/',
    headers: {
      'Content-Type': type,
    },
    origin: 'https://api.spp-art.com/',
    withCredentials: true,
  };
  const instance = axios.create(config);
  instance.defaults.timeout = 2500;
  return instance;
};

export const instance = getAxiosInstans('application/json');
export const instanceForm = getAxiosInstans('multipart/form-data');
