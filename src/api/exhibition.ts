import { instance } from './instance';

export const getExhibitionList = async (status?: string, page?: number, size?: number) => {
  try {
    const res = await instance.get('/exhibitions', {
      params: {
        status: status,
        page: page,
        size: size,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
};
