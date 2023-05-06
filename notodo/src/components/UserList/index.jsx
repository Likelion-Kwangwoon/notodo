import * as S from "./style"
import UserListComp from "./UserListComp"

export default function UserList() {
  return (
    <S.ListWrap>
      <ul>
        <UserListComp />
      </ul>
    </S.ListWrap>
  )
}
