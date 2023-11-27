import styled from '@emotion/styled';

export const Box = styled.div<{ img: string }>`
  width: 100%;
  height: 14vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  border-radius: 10px;
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
`;

export const BoxCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  border-radius: 10px;
  z-index: 1;
`;

export const BoxState = styled.div<{ state: boolean }>`
  ${({ theme }) => theme.font.bold_12};
  background-color: ${(props) => (props.state ? '#a550f0' : '#000')};
  width: ${(props) => (props.state ? '70%' : '50%')};
  text-align: center;
  padding: 0.2rem 0;
  z-index: 2;
  border-radius: 10px;
`;

export const BoxTitle = styled.h2<{ state: boolean }>`
  font-size: 2vh;
  font-weight: 700;
  z-index: 2;
`;

export const BoxDate = styled.p<{ state: boolean }>`
  ${({ theme }) => theme.font.regular_12}
  z-index: 2
`;
