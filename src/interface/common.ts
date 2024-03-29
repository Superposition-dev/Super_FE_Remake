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
}

export interface CommonUserImageProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
  data: UserInfoType | undefined;
}

export interface ImageFileType {
  name: string;
  type: string;
  size: number;
  data: string;
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
