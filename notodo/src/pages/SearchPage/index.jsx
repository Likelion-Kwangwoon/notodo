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

  const handleSearch = async () => {
    const data = await searchUser(keyword);
    setResult(data);
  }

  return (
    <>
      <S.NavWrap>
        <S.SearchWrap
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}>
          <S.SearchBox
            className={!keyword && 'empty'}
            onKeyDown={e => e.key ==='Enter' && handleSearch()}
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