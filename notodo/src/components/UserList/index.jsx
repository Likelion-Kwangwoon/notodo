import * as S from "./style"
import UserListComp from "./UserListComp"

export default function UserList({userList}) {
  return (
    <S.ListWrap>
      {
        !!userList.length &&
          <ul>
            <UserListComp />
          </ul>
      }
    </S.ListWrap>
  )
}
