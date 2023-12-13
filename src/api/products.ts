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

export const getSearchProducts = async (search: string) => {
  try {
    const res = await instance.get(`/products?search=${search}`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export const getQrProduct = async (id: string) => {
  const res = await instance.get(`/products/${id}?isQr=true`);
  return res.data;
}