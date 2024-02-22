import { ValidateEmailType, ValidateNickNameType } from '@/interface/common';

export const customNullImg = (src: string) => {
  if (src?.includes('base64')) return src;
  return src ? `https://kr.object.ncloudstorage.com/superposition-bucket/${src}` : '/images/default.png';
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

export const regexNickname = (nickname: string) => {
  const regex =
    /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
  return regex.test(nickname);
};

export const dateFormatter = (date: string) => {
  const index = date.indexOf('T');
  return date.substring(0, index);
};
