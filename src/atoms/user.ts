import { atom } from 'recoil';

export const userInfoAtom = atom<UserInfoType>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
    profile: '',
    artist: false,
  },
});
