import { UserType } from '@/interface/user';
import { atom } from 'recoil';

export const userInfoAtom = atom<UserType>({
  key: 'userInfo',
  default: {
    email: '',
    nickname: '',
    profile: '',
    artist: false,
    birthYear: '',
    gender: 'M'
  },
});

export const nicknameAtom = atom<boolean>({
  key: 'isValiableNickname',
  default: false,
})