export enum ValidateNickNameType {
  default = 'default',
  error = 'error',
  success = 'success',
}

export interface UserInfoType {
  userId?: number;
  name?: string;
  nickName?: string;
  email?: string;
  birthYear?: string;
  gender?: string;
  image?: string;
}

export interface UserImageProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
}

export interface UserInfoProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
}
