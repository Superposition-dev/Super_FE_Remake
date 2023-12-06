import { setItemWithExpire } from '@/util/localstorage';
import axios from 'axios';
import { instance } from './instance';

export const patchView = async ({ title, id }: { title: string; id: string | number }) => {
  try {
    const res = await instance.patch(`/${title}/${id}/view`);
    setItemWithExpire('views', `${title}-${id}`);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const patchLike = async (id: number) => {
  const res = await instance.patch(`/products/${id}/like`);
  console.log(res.data);
  return res.data;
};
