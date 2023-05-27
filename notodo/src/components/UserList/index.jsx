import * as S from "./style"
import UserListComp from "./UserListComp"

export default function UserList({userList, isFollower}) {
  return (
    <S.ListWrap>
      {
        !!userList.length &&
        <ul>
            {userList.map((user, idx) =>
                <UserListComp isFollower={isFollower} key={idx} user={user} />
              )}
          </ul>
      }
    </S.ListWrap>
  )
}
