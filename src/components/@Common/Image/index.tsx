import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { CommonUserImageProps } from '@/interface/common';
import { customNullImg } from '@/util/utils';
import Portal from '../Modal';
import ImageModal from '../Modal/Image';
import { useMutation } from 'react-query';
import { patchUserProfile } from '@/api/user';
import { getCookie } from '@/util/cookie';
import ResponseModal from '../Modal/Response';

function CommonUserImage(props: CommonUserImageProps) {
  const { userInfo, setUserInfo, data } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const token = getCookie('accessToken');

  const { mutate: patchUserProfileMutate } = useMutation(patchUserProfile, {
    onSuccess: () => {
      setComplete(true);
    },
  });

  const onUpload = () => {
    if (!inputRef.current) return;

    inputRef.current.click();
    setOpen(false);
  };

  const onPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const fileReader = new FileReader();
    const formData = new FormData();

    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = () => {
      setUserInfo((userInfo) => ({
        ...userInfo,
        profile: fileReader.result as string,
      }));

      formData.append('file', file as Blob);
      patchUserProfileMutate({ file: formData, token: token });
    };

    e.target.value = '';
  };

  const onPreviewOrigin = () => {
    setOpen(false);
    setUserInfo((userInfo) => ({
      ...userInfo,
      profile: '',
    }));

    patchUserProfileMutate({ file: null, token: token });
  };

  return (
    <>
      <S.UserImageWrap onClick={() => setOpen(true)}>
        <S.UserImage>
          <S.Img
            src={
              data?.profile === userInfo?.profile && data?.profile !== undefined
                ? customNullImg(userInfo?.profile as string)
                : userInfo?.profile !== undefined
                ? customNullImg(userInfo.profile)
                : customNullImg('')
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
        <>
          {open ? (
            <ImageModal state={open} setState={setOpen} onChanger={onUpload} onOriginChanger={onPreviewOrigin} />
          ) : (
            <></>
          )}
          {complete ? (
            <ResponseModal
              state={complete}
              setState={setComplete}
              message="프로필이 수정되었습니다."
              cancel="닫기"
              handler={undefined}
            />
          ) : (
            <></>
          )}
        </>
      </Portal>
    </>
  );
}

export default CommonUserImage;
