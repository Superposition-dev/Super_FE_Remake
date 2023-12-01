import { instance } from './instance';

export const getProducts = async () => {
  try {
    const res = await instance.get('/products');
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProduct = async (id: string) => {
  try {
    const res = await instance.get(`/products/${id}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
