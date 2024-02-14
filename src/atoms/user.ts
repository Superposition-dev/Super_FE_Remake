import { UserType } from '@/interface/user';
import { atom } from 'recoil';

export const userInfoAtom = atom<UserType>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
    profile: '',
    artist: false,
  },
});
