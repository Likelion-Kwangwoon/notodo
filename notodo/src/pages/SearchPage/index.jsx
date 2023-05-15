import * as S from './style';
import SearchedList from '../../components/SearchedList'
import { useState } from 'react';
import iconBack from '../../assets/icon-back.svg'
export default function SearchPage() {
  const [userSearch, setUserSearch] = useState('');

  const getValue = (e) => {
    e.preventDefault();
    setUserSearch(e.target.value.toLowerCase());
  }
  return (
    <>
      <S.NavWrap>
        <S.SearchWrap>
          <S.EraseButton><img src={iconBack} alt="" /></S.EraseButton>
          <S.SearchBox className={!userSearch && 'empty'} onChange={getValue} placeholder='    이메일을 입력하세요 :)'/>
        </S.SearchWrap>
      </S.NavWrap>
      <S.ListWrap>
        <SearchedList keyword={userSearch} />
      </S.ListWrap>
    </>
  )
}