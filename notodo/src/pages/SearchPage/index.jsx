import * as S from './style';
import SearchedList from '../../components/SearchedList'
import { useState } from 'react';
import iconSearch from '../../assets/icon-search.svg'
import iconSearchFill from '../../assets/icon-search-fill.svg'
import { searchUser } from '../../api/api'

export default function SearchPage() {
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState({});

  const handleSearchEvent = e => {
    const regExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i

    if (e.key === 'Enter')
      if (e.target.value.match(regExp) !== null) {
        e.target.value ? handleSearch() : setResult({})
      } else alert('올바른 이메일 형식을 입력하세요')
  }

  const handleSearch = async () => {
    const data = await searchUser(keyword);

    data?.status === 500 ? alert('존재하지 않는 이메일입니다.') : setResult(data);
  }

  return (
    <>
      <S.NavWrap>
        <S.SearchWrap
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}>
          <S.SearchBox
            className={!keyword && 'empty'}
            onKeyDown={handleSearchEvent}
            onChange={e => setKeyword(e.target.value.toLowerCase())}
            placeholder='이메일을 입력하세요 :)' />
          <S.SearchButton onClick={handleSearch}>
            <img 
            src={isFocused ? iconSearchFill : iconSearch}
            alt="검색하기 버튼" 
            />
          </S.SearchButton>
        </S.SearchWrap>
      </S.NavWrap>
      <SearchedList result={result} />
    </>
  )
}