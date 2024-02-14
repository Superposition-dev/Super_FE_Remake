import { instance } from "./instance";

export const refreshTest = async () => {
  try {
    const res = await instance.get('/users/test');
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export const getReToken = async () => {
  try {
    const res = await instance.get('/users/responseTest');
    return res.data;
  } catch (e) {
    console.log(e);
  }
}