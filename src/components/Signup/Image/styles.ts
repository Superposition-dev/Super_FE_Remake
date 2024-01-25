import styled from '@emotion/styled';
import { MdCameraAlt } from 'react-icons/md';

export const UserImageWrap = styled.div`
  position: relative;
  cursor: pointer;
`;

export const UserImage = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  width: 11rem;
  height: 11rem;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.colors.dark_gray};
  background-color: ${({ theme }) => theme.colors.dark_navy};
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 0;
  background-color: ${({ theme }) => theme.colors.dark_navy};
  object-fit: cover;
`;

export const IconWrap = styled.div`
  position: absolute;
  ${({ theme }) => theme.flex.flexCenter};
  bottom: 0;
  right: 0;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.light_purple};
  overflow: hidden;
`;

export const Icon = styled(MdCameraAlt)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const ImageInput = styled.input`
  display: none;
`;
