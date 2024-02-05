import { UserInfoType } from '@/interface/signup';
import { instance } from './instance';
import { getCookie } from '@/util/cookie';

export const postSignup = async (data:UserInfoType) => {
  try {
    const res = await instance.post('/users/signup',data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMe = async () => {
  const cookie = await getCookie('token');
  try{
    const res = await instance.get('/users/me',{
      headers: {
        Authorization: `Bearer ${cookie}`,
      },
    });
    return res.data;
  }catch(e){
    console.log(e);
  }
}