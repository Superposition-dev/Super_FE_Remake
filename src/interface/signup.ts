export enum ValidateNickNameType {
  default = 'default',
  error = 'error',
  success = 'success',
}

export interface UserInfoType {
  userId?: number;
  nickName?: string;
  email?: string;
  year?: string;
  sex?: string;
  picture?: string;
}

export interface UserImageProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
}

export interface UserInfoProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
}
