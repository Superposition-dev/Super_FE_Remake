export enum ValidateNickNameType {
  default = 'default',
  error = 'error',
  success = 'success',
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

export interface UserImageProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
}

export interface UserInfoProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
}
