import * as S from "./style"
import SearchedListComp from"./SearchedListComp";

export default function SearchedList(props) {

  return (
    <S.ListWrap>
      {
        !(props.result && props.result.email) 
          ?
          <S.GuideDesc>찾으려는 이메일을 검색해보세요</S.GuideDesc>
          :
          <ul>
            <SearchedListComp user={props.result} />
          </ul>
      }
    </S.ListWrap>
  )
}