import styled from '@emotion/styled';

export const PosterWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const Box = styled.div<{ img: string }>`
  width: 50%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  ${({ theme }) => theme.flex.flexColumn};
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  filter: drop-shadow(0px 4px 8px rgba(230, 154, 249, 0.3));
  @media (max-width: 768px) {
    width: 100%;
    height: 14vh;
    background-position: top;
  }
`;

export const TextWrap = styled.div`
  display: none;
  @media (max-width: 768px) {
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  z-index: 1;
  }
`

export const BoxCover = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  border-radius: 10px;

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
export const Info = styled.div<{state:boolean}>`
  width: 50%;
  margin:1rem 0 0 2rem;
  color: ${({theme,state})=>state?theme.colors.white:'#797979'};
  @media (max-width: 768px) {
    display: none;
  }
`

export const InfoTitle = styled.h2`
  font-size: 3.8rem;
  font-weight: 600;
  word-break: keep-all;
  margin-bottom: 1rem;
`;

export const InfoDate = styled.p`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 2rem;
`;

export const InfoState = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background-color: #a550f0;
  padding: 1rem 1rem;
  border-radius: 10px;
  display: inline-block;
  text-align: center;
`;
