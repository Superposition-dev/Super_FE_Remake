import { UserInfoType } from '@/interface/user';
import { instance, instanceForm } from './instance';

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

    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getLogout = async (token: string) => {
  try {
    const res = await instance.get('/users/logout', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
    return e;
  }
};

export const addLike = async ({ id, token }: { id: number; token: string }) => {
  try {
    const res = await instance.post(`/products/${id}/like`, null, {
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
    const res = await instance.post(`/artist/${instagramId}/follow`, null, {
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
    const res = await instance.delete(`/artist/${instagramId}/follow`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUser = async (token: string) => {
  try {
    const res = await instance.delete(`/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const patchUserProfile = async ({ file, token }: { file: FormData | null; token: string }) => {
  try {
    const res = await instanceForm.patch(`/users/edit/profile`, file, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const putEditUserInfo = async ({ body, token }: { body: UserInfoType; token: string }) => {
  try {
    const res = await instance.put(`/users/edit`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const isValiableNickname = async (token: string) => {
  try {
    const res = await instance.get('/users/isAvailable', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
