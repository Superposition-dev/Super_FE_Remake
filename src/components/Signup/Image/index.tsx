import React, { useRef, useState } from 'react';
import * as S from './styles';
import { UserImageProps } from '@/interface/signup';
import { customNullImg } from '@/util/utils';

function UserImage(props: UserImageProps) {
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
        picture: fileReader.result as string,
      }));
    };

    e.target.value = '';
  };

  return (
    <>
      <S.UserImageWrap onClick={onUploadImage}>
        <S.UserImage>
          <S.Image src={customNullImg(userInfo?.picture ? userInfo.picture : '')} />
        </S.UserImage>
        <S.IconWrap>
          <S.Icon />
        </S.IconWrap>
      </S.UserImageWrap>
      <S.ImageInput type="file" accept="image/*" ref={inputRef} onChange={onPreviewImage} multiple={false} />
    </>
  );
}

export default UserImage;
