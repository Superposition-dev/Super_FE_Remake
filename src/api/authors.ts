import { instance } from './instance';

export const getAuthors = async () => {
  try {
    const res = await instance.get('/artist');
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMainAuthors = async () => {
  try {
    const res = await instance.get('/artist?isNow=true');
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getSearchAuthors = async (name: string) => {
  try {
    const res = await instance.get(`/artist?search=${name}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
