import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContent, getProfile } from "../../api/api"
import { setLength } from "../../redux/slice/listSlice";
import * as S from "./style"

export default function UserInfo() {
  const dispatch = useDispatch()
  const listLen = useSelector(state => state.list)

  const handleGetAllList = async () => {
    const res = await getAllContent();
    dispatch(setLength(res))
  }

  useEffect(() => {
    handleGetAllList()
  }, [])

  return (
    <S.Div>
      <img src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201706/23/b71449f8-e830-45a0-bb4d-7b1a328e19f2.jpg" alt="" />
      <S.DescWrap>
        <p>내이름은</p>
        <p>지금까지 {listLen.length}개의 리스트를 작성했어요!</p>
      </S.DescWrap>
    </S.Div>
  )
}
