import { ValidateNickNameType } from '@/interface/signup';

export const customNullImg = (src: string) => {
  return src ? src : '/images/nullImage.png';
};

export const validateNickName = (nickName: string) => {
  if (nickName.length === 0) return ValidateNickNameType.default;
  if (nickName.length < 1 || nickName.length > 104) {
    return ValidateNickNameType.error;
  } else {
    return ValidateNickNameType.success;
  }
};
