import React, { useRef, useState } from 'react';
import * as S from './styles';
import { CommonUserImageProps } from '@/interface/common';
import { customNullImg } from '@/util/utils';

function CommonUserImage(props: CommonUserImageProps) {
  const { userInfo, setUserInfo } = props;
  const [imageFile, setImageFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadImage = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  const onPreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageFile(e.target.files[0]);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      setUserInfo((userInfo) => ({
        ...userInfo,
        profile: fileReader.result as string,
      }));
    };

    e.target.value = '';
  };

  return (
    <>
      <S.UserImageWrap onClick={onUploadImage}>
        <S.UserImage>
          <S.Image src={customNullImg(userInfo?.profile ? userInfo.profile : '')} />
        </S.UserImage>
        <S.IconWrap>
          <S.Icon />
        </S.IconWrap>
      </S.UserImageWrap>
      <S.ImageInput type="file" accept="image/*" ref={inputRef} onChange={onPreviewImage} multiple={false} />
    </>
  );
}

export default CommonUserImage;