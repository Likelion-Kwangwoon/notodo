import * as S from "./style"
import { searchUser } from '../../api/api';
import SearchedListComp from"./SearchedListComp";
import { useState } from 'react';
import { useEffect } from 'react';

export default function SearchedList(props) {
  const [searchedData, setSearchedData] = useState([]);
  useEffect(() => {
    const handlelist = async () => {
      const data = await searchUser(props.keyword);
      setSearchedData(data);
    }
    handlelist();
  },[props]);
  
  return(
    <S.ListWrap>
      {
        !searchedData
          ?
          <div><p>찾으려는 이메일을 검색해보세요</p></div>
          :
          <S.List>
          {
            // searchedData.map((user, index) => 
            //   <div key={index}>
            //     <SearchedListComp user={user}/>
            //   </div>
            // )
            
            <SearchedListComp user={searchedData} />
          }
          </S.List>
      }
    </S.ListWrap>
  )
}