import { UserInfoType } from '@/interface/user';
import { instance } from './instance';

export const getUserInfo = async (cookie: string) => {
  try {
    const res = await instance.get('/users/me', {
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserLike = async (token: string) => {
  try {
    const res = await instance.get('/users/me/like', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserFollow = async (token: string) => {
  try {
    const res = await instance.get('/users/me/follow', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // const res = {
    //   data: {
    //     authors: [
    //       {
    //         profile: 'ddbe4913-271f-4fd5-846c-f9fa39e788f7.jpg',
    //         name: '삼이공',
    //         introduce: '다른 세계의 희망을 보려 도약하는',
    //         description:
    //           '스스로의 껍질에서 벗어나고 싶거나, 주변의 상황을 벗어나 어디로든지 솟아 오르고 싶거나, 도망이 아닌 다른 세계의 희망을 보려 도약하는 사람들을 위한 그림을 그리는 삼이공입니다.',
    //         instagramId: '320_artwork',
    //         display: true,
    //       },
    //       {
    //         profile: 'ddbe4913-271f-4fd5-846c-f9fa39e788f7.jpg',
    //         name: '삼이공',
    //         introduce: '다른 세계의 희망을 보려 도약하는',
    //         description:
    //           '스스로의 껍질에서 벗어나고 싶거나, 주변의 상황을 벗어나 어디로든지 솟아 오르고 싶거나, 도망이 아닌 다른 세계의 희망을 보려 도약하는 사람들을 위한 그림을 그리는 삼이공입니다.',
    //         instagramId: '320_artwork',
    //         display: true,
    //       },
    //       {
    //         profile: 'ddbe4913-271f-4fd5-846c-f9fa39e788f7.jpg',
    //         name: '삼이공',
    //         introduce: '다른 세계의 희망을 보려 도약하는',
    //         description:
    //           '스스로의 껍질에서 벗어나고 싶거나, 주변의 상황을 벗어나 어디로든지 솟아 오르고 싶거나, 도망이 아닌 다른 세계의 희망을 보려 도약하는 사람들을 위한 그림을 그리는 삼이공입니다.',
    //         instagramId: '320_artwork',
    //         display: true,
    //       },
    //     ],
    //   },
    // };

    // const res = {
    //   data: {
    //     products: [],
    //   },
    // };

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getIsChange = async ({ token }: { token: string }) => {
  try {
    const res = await instance.get(`/users/isAvailable`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getLogout = async () => {
  try {
    const res = await instance.get('/users/logout');
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const postSignup = async (data: UserInfoType) => {
  try {
    const res = await instance.post('/users/signup', data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addLike = async ({ id, token }: { id: number; token: string }) => {
  try {
    const res = await instance.post(`/products/${id}/like`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const addFollow = async ({ instagramId, token }: { instagramId: string; token: string }) => {
  try {
    const res = await instance.post(`/artist/${instagramId}/follow`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteLike = async ({ id, token }: { id: number; token: string }) => {
  try {
    const res = await instance.delete(`/products/${id}/dislike`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteFollow = async ({ instagramId, token }: { instagramId: string; token: string }) => {
  try {
    const res = await instance.delete(`/products/${instagramId}/dislike`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async () => {
  try {
    const res = await instance.delete(`/users`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
