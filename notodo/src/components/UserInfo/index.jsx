import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getAllContent, getOtherNotodoCount, getOtherUserInfo, getUserInfo } from "../../api/api"
import { setLength } from "../../redux/slice/listSlice";
import * as S from "./style"

export default function UserInfo() {
  const dispatch = useDispatch()
  const listLen = useSelector(state => state.list)
  const [user, setUser] = useState({})
  const params = useParams()

  const handleGetUserInfo = async () => {
    const res = await getUserInfo() 
    setUser(res);
  }

  const handleGetAllList = async () => {
    const res = await getAllContent();
    dispatch(setLength(res.length))
  }

  const handleGetOtherAllList = async () => {
    const res = await getOtherNotodoCount({ email: params.id });
     dispatch(setLength(res))
  }

  const handleGetOtherUserInfo = async () => {
    const res = await getOtherUserInfo(params.id)
    setUser(res)
  }

  useEffect(() => {
    !params.id ? handleGetAllList() : handleGetOtherAllList()
    !params.id ? handleGetUserInfo() : handleGetOtherUserInfo()
  }, [params.id])

  return (
    user &&
    <S.Div>
      <img src={user.thumbnail} alt="" />
      <S.DescWrap>
        <p>{user.nickname}</p>
        <p>지금까지 {listLen.length}개의 리스트를 작성했어요!</p>
      </S.DescWrap>
    </S.Div>
  )
}
