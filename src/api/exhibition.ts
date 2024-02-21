import { instance } from './instance';

export const getExhibitions = async (status?: string, page?: number, size?: number) => {
  try {
    const res = await instance.get('/exhibitions', {
      params: {
        status: status,
        page: page,
        size: size,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getExhibition = async (id: string) => {
  try {
    const res = await instance.get(`/exhibitions/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
