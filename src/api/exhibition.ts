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
    // const res = await instance.get(`/exhibitions/${id}`);
    const res = {
      data: {
        exhibitionId: 1,
        title: '성수 포지션',
        subHeading: '슈퍼포지션 두 번째 기획 전시',
        productInfo: [
          { productId: 1, poster: '', artist: '작가1', title: '작품 이름1', tags: ['수채화', '카페', '은은한'] },
          { productId: 2, poster: '', artist: '작가2', title: '작품 이름2', tags: ['화려한', '조명', '어둠'] },
          { productId: 3, poster: '', artist: '작가3', title: '작품 이름3', tags: ['조용한', '시골', '나른한'] },
        ],
        artistInfo: [
          { artistId: 1, poster: '', name: '작가1', instagramId: 'abc1234', introduce: '안녕하세요' },
          { artistId: 2, poster: '', name: '작가2', instagramId: 'abc1234', introduce: '안녕하세요' },
          { artistId: 3, poster: '', name: '작가3', instagramId: 'abc1234', introduce: '안녕하세요' },
        ],
      },
    };

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
