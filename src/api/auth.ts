import { UserInfoType } from '@/interface/signup';
import { instance } from './instance';

export const postSignup = async (data:UserInfoType) => {
  try {
    const res = await instance.post('/users/signup',data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};