import { useState } from "react"
import { getFollowingList } from "../../api/api"
import UserList from "../../components/UserList"
import * as S from "./style"

export default function FollowListPage() {
  const [isFollower, setIsFollower] = useState(true)
  const [followList, setFollowList] = useState([])

  const handleIsFollower = () => {
    setIsFollower(true)
  }

  const handleIsFollowing = async () => {
    setIsFollower(false)

    const res = await getFollowingList()
    console.log(res)
    res && setFollowList(res);
  }

  return (
    <>
      <S.NavWrap>
        <S.TabNav className={isFollower && 'on'} onClick={handleIsFollower}>팔로워</S.TabNav>
        <S.TabNav className={!isFollower && 'on'} onClick={handleIsFollowing}>팔로잉</S.TabNav>
      </S.NavWrap>
      <UserList userList={followList} />
    </>
  )
}
