import { ImageFileType } from './common';

export interface UserType {
  email: string;
  nickname: string;
  profile: string;
  artist: boolean;
  birthYear?: string | null;
  gender?: 'M' | 'F' | null;
}

export interface UserInfoType {
  userId?: number;
  name?: string;
  nickname?: string;
  email?: string;
  birthYear?: string | null;
  gender?: 'M' | 'F' | null;
  profile?: string;
  file?: ImageFileType | null;
}

export interface UserInfoProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
  data: UserInfoType | undefined;
}

export interface ProfileProps {
  userInfo: UserType | undefined;
}
