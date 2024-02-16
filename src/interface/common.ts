import { UserInfoType } from './user';

export interface CommonTitleProps {
  TITLE: string;
  SUBTITLE: string;
}

export interface CommonWrapperProps {
  children: React.ReactNode;
}

export interface CommonFloatingProps {
  title: string;
  src: string;
  handler?: () => void;
}

export interface CommonUserImageProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
  data: UserInfoType | undefined;
}

export enum ValidateNickNameType {
  default = 'default',
  error = 'error',
  success = 'success',
  duplicate = 'duplicate',
}

export enum ValidateEmailType {
  default = 'default',
  error = 'error',
  success = 'success',
}
