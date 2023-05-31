import * as S from "./style"
import SearchedListComp from"./SearchedListComp";

export default function SearchedList({ result, handleSearch }) {

  return (
    <S.ListWrap>
      {
        !(result && result.email) 
          ?
          <S.GuideDesc>찾으려는 이메일을 검색해보세요</S.GuideDesc>
          :
          <ul>
            <SearchedListComp result={result} handleSearch={handleSearch}/>
          </ul>
      }
    </S.ListWrap>
  )
}