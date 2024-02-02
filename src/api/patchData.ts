import { instance } from './instance';

export const patchLike = async ({ id, like }: { id: number; like: boolean }) => {
  const res = await instance.patch(`/products/${id}/like`, like);
  console.log(res);
  return res.data;
};

export const patchFormClick = async (id: number) => {
  const res = await instance.patch(`/products/${id}/google`);
  console.log(res);
  return res.data;
};
