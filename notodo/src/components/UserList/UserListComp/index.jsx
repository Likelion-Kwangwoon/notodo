import * as S from "./style"

export default function UserListComp() {
  return (
    <S.UserLi>
      <img src="https://cdn.pixabay.com/photo/2023/04/23/11/11/flowers-7945521_1280.jpg" alt="" />
      <div>
        <p>홍길동</p>
        <p>ekdms@naver.com</p>
      </div>
      <button>팔로잉</button>
    </S.UserLi>
  )
}
