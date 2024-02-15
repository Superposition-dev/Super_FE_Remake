import { ValidateEmailType, ValidateNickNameType } from '@/interface/common';

export const customNullImg = (src: string) => {
  return src ? src : '/images/nullImage.png';
};

export const validateNickName = (nickName: string, origin?: string) => {
  if (nickName.length < 1 || nickName.length > 104) {
    return ValidateNickNameType.error;
  } else {
    if (nickName === origin) {
      return ValidateNickNameType.default;
    } else return ValidateNickNameType.success;
  }
};

export const validateEmail = (email: string, origin?: string) => {
  if (email.length === 0) return ValidateEmailType.default;

  if (email === origin) {
    return ValidateEmailType.success;
  } else {
    return ValidateEmailType.error;
  }
};

export const seqFormatter = (id: number) => {
  return String(id).padStart(3, '0');
};

export const priceFormatter = (price: number) => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
