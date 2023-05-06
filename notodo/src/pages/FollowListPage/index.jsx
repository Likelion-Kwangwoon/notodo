import { useState } from "react"
import UserList from "../../components/UserList"
import * as S from "./style"

export default function FollowListPage() {
  const [isFollower, setIsFollower] = useState(true)

  const handleIsFollower = () => {
    setIsFollower(true)
  }

  const handleIsFollowing = () => {
    setIsFollower(false)
  }

  return (
    <>
      <S.Title>친구 목록</S.Title>
      <S.NavWrap>
        <S.TabNav className={isFollower && 'on'} onClick={handleIsFollower}>팔로워</S.TabNav>
        <S.TabNav className={!isFollower && 'on'} onClick={handleIsFollowing}>팔로잉</S.TabNav>
      </S.NavWrap>
      <UserList />
    </>
  )
}
