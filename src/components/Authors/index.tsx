import React from 'react';
import * as S from './styles';
import CommonTitle from '../common/Title';
import Search from '../common/Search';
import Author from './Author';

const titleData = {
  title: '파트너 작가',
  subTitle: '슈퍼포지션의 작가들을 소개합니다.',
};

function Authors() {
  return (
    <S.AuthorsContainer>
      <CommonTitle data={titleData} />
      <Search />
      <S.AuthorsWrap>
        <Author />
        <Author />
        <Author />
        <Author />
        <Author />
        <Author />
        <Author />
        <Author />
      </S.AuthorsWrap>
    </S.AuthorsContainer>
  );
}

export default Authors;
