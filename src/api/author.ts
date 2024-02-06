import { instance } from './instance';

export const getAuthors = async () => {
  try {
    const res = await instance.get('/artist');
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getAuthor = async (id: string) => {
  try {
    const res = await instance.get(`/artist/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMainAuthors = async () => {
  try {
    const res = await instance.get('/artist?isProductPage=true');
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

export const postFollow = async ({ instagramId, token }: { instagramId: string; token: string }) => {
  try {
    const res = await instance.post(`/artist/${instagramId}/follow`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
