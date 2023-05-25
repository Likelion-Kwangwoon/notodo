import * as S from './style';
import SearchedList from '../../components/SearchedList'
import { useState } from 'react';
import iconSearch from '../../assets/icon-search.svg'
import iconSearchFill from '../../assets/icon-search-fill.svg'
import { searchUser } from '../../api/api';
export default function SearchPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState({});
  const getValue = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  }
  const handleSearch = async () => {
    const data = await searchUser(keyword);
    setResult(data);
  }
  const handleFocus = () => {
    setIsFocused(true);
  }
  const handleBlur = () => {
    setIsFocused(false);
  }
  return (
    <>
      <S.NavWrap>
        <S.SearchWrap onFocus={handleFocus} onBlur={handleBlur}>
          <S.SearchBox className={!keyword && 'empty'} onChange={getValue} placeholder='    이메일을 입력하세요 :)'/>
          <S.SearchButton onClick={handleSearch}><img 
            src={isFocused ? iconSearchFill : iconSearch}
            alt="" 
            /></S.SearchButton>
        </S.SearchWrap>
      </S.NavWrap>
      <S.ListWrap>
        <SearchedList result={result} />
      </S.ListWrap>
    </>
  )
}