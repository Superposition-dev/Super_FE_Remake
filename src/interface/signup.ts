import { UserInfoType } from './user';

export enum ValidateNickNameType {
  default = 'default',
  error = 'error',
  success = 'success',
  duplicate = 'duplicate',
}

export interface UserInfoProps {
  userInfo: UserInfoType | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType | undefined>>;
}
