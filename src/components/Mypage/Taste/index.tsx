import * as S from './styles';

function Taste() {
  return (
    <S.TasteWrap>
      <S.Title>나의 취향</S.Title>
      <S.TasteButtonWrap>
        <S.TasteButton>
          <S.Heart />
          좋아요 작품
        </S.TasteButton>
        <S.TasteButton>
          <S.Bookmark />
          팔로우 작가
        </S.TasteButton>
      </S.TasteButtonWrap>
    </S.TasteWrap>
  );
}

export default Taste;
