import { instance } from './instance';

export const patchLike = async ({ id, like }: { id: number; like: boolean }) => {
  const res = await instance.patch(`/products/${id}/like`, like);
  return res.data;
};

export const patchFormClick = async (id: number) => {
  const res = await instance.patch(`/products/${id}/google`);
  return res.data;
};


export const patchView = async ({ title, id }: { title: string; id: string | number }) => {
  try {
    const res = await instance.patch(`/${title}/${id}/view`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
