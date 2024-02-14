export interface UserType {
  email: string;
  nickname: string;
  profile: string;
  artist: boolean;
}

export interface UserInfoType {
  userId?: number;
  name?: string;
  nickname?: string;
  email?: string;
  birthYear?: string;
  gender?: 'M' | 'F';
  profile?: string;
}

export interface UserInfoProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
  data: UserInfoType | undefined;
}
