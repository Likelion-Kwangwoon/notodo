import * as S from "./style"
import UserListComp from "./UserListComp"

export default function UserList({userList}) {
  return (
    <S.ListWrap>
      {
        !!userList.length &&
        <ul>
            {userList.map(user =>
                <UserListComp key={user.email} user={user} />
              )}
          </ul>
      }
    </S.ListWrap>
  )
}
