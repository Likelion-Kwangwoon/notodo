import { useEffect, useState } from "react"
import { getFollowerList, getFollowingList } from "../../api/api"
import UserList from "../../components/UserList"
import * as S from "./style"

export default function FollowListPage() {
  const [isFollower, setIsFollower] = useState(true)
  const [followList, setFollowList] = useState([])

  const handleIsFollower = async () => {
    const res = await getFollowerList()
    res && setFollowList(res);
  }

  const handleIsFollowing = async () => {
    const res = await getFollowingList()
    res && setFollowList(res);
  }

  useEffect(() => {
    isFollower ? handleIsFollower() : handleIsFollowing()
  }, [isFollower])

  return (
    <>
      <S.NavWrap>
        <S.TabNav className={isFollower && 'on'} onClick={() => setIsFollower(true)}>팔로워</S.TabNav>
        <S.TabNav className={!isFollower && 'on'} onClick={() => setIsFollower(false)}>팔로잉</S.TabNav>
      </S.NavWrap>
      <UserList userList={followList} isFollower={isFollower} />
    </>
  )
}
