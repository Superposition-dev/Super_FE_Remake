import styled from '@emotion/styled';

export const ProfileWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  justify-content: space-between;
  width: 100%;
`;

export const Profile = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 1.25rem;
  width: 80%;
`;

export const ImageWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  width: 9rem;
  height: 9rem;
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

export const DescWrap = styled.div`
  ${({ theme }) => theme.flex.flexColumn};
  gap: 0.25rem;
  width: 60%;
`;

export const NickName = styled.p`
  width: 100%;
  ${({ theme }) => theme.font.bold_20};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.layout.ellipsis}
`;

export const EmailWrap = styled.div`
  ${({ theme }) => theme.flex.flexRow};
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const KakaoWrap = styled.div`
  ${({ theme }) => theme.flex.flexCenter};
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.kakao};
`;

export const KakaoSymbol = styled.img`
  width: 70%;
  height: 70%;
`;

export const Email = styled.p`
  width: 85%;
  ${({ theme }) => theme.font.regular_12};
  color: ${({ theme }) => theme.colors.light_gray};
  ${({ theme }) => theme.layout.ellipsis}
`;

export const EditButton = styled.button`
  ${({ theme }) => theme.flex.flexCenter};
  width: 5.6rem;
  height: 2.9rem;
  border-radius: 4rem;
  border: 1px solid white;
  ${({ theme }) => theme.font.bold_12};
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
`;
