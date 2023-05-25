import * as S from "./style"
import { searchUser } from '../../api/api';
import SearchedListComp from"./SearchedListComp";
import { useState } from 'react';
import { useEffect } from 'react';

export default function SearchedList(props) {
  return(
    <S.ListWrap>
      {
        !(props.result && props.result.email) 
          ?
          <div><p>찾으려는 이메일을 검색해보세요</p></div>
          :
          <S.List>
            <SearchedListComp user={props.result} />
          </S.List>
      }
    </S.ListWrap>
  )
}