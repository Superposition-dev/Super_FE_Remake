import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { CommonUserImageProps } from '@/interface/common';
import { customNullImg } from '@/util/utils';
import Portal from '../Modal';
import ImageModal from '../Modal/Image';

function CommonUserImage(props: CommonUserImageProps) {
  const { userInfo, setUserInfo, data } = props;
  const [imageFile, setImageFile] = useState<File>();
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onUpload = () => {
    if (!inputRef.current) return;

    inputRef.current.click();
    setOpen(false);
  };

  const onPreviewOrigin = () => {
    setOpen(false);
    setUserInfo((userInfo) => ({
      ...userInfo,
      profile: '',
    }));
  };

  const onPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <S.UserImageWrap onClick={() => setOpen(true)}>
        <S.UserImage>
          <S.Img
            src={
              data?.profile === userInfo?.profile
                ? customNullImg(`https://kr.object.ncloudstorage.com/superposition-bucket/${userInfo?.profile}`)
                : userInfo?.profile !== undefined
                ? customNullImg(userInfo.profile)
                : ''
            }
            alt="회원 이미지"
            fill
          />
        </S.UserImage>
        <S.IconWrap>
          <S.Icon />
        </S.IconWrap>
      </S.UserImageWrap>
      <S.ImageInput type="file" accept="image/*" ref={inputRef} onChange={onPreview} multiple={false} />
      <Portal>
        {open ? (
          <ImageModal state={open} setState={setOpen} onChanger={onUpload} onOriginChanger={onPreviewOrigin} />
        ) : (
          <></>
        )}
      </Portal>
    </>
  );
}

export default CommonUserImage;
