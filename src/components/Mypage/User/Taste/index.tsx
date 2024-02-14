import { useRouter } from 'next/router';
import * as S from './styles';

function Taste() {
  const router = useRouter();

  const onLink = (url: string) => {
    router.push(url);
  };

  return (
    <S.TasteWrap>
      <S.Title>나의 취향</S.Title>
      <S.TasteButtonWrap>
        <S.TasteButton onClick={() => onLink('/mypage/like')}>
          <S.Heart />
          좋아요 작품
        </S.TasteButton>
        <S.TasteButton onClick={() => onLink('/mypage/follow')}>
          <S.Bookmark />
          팔로우 작가
        </S.TasteButton>
      </S.TasteButtonWrap>
    </S.TasteWrap>
  );
}

export default Taste;
