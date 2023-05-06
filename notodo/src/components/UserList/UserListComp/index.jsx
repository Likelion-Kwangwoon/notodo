import { useState } from "react"
import Modal from "../../Modal"
import * as S from "./style"

export default function UserListComp() {
  const [showPopup, setShowPopup] = useState(false)

  const handleCancel = () => {
    setShowPopup(false)
  }
  
  return (
    <>
      <S.UserLi>
        <img src="https://cdn.pixabay.com/photo/2023/04/23/11/11/flowers-7945521_1280.jpg" alt="" />
        <div>
          <p>홍길동</p>
          <p>ekdms@naver.com</p>
        </div>
        <button onClick={() => setShowPopup(true)}>팔로잉</button>
      </S.UserLi>

      {showPopup && (
        <Modal onClose={handleCancel}>
          <S.DelModal>
            <p>정말 삭제하시겠습니까?</p>
            <button>네</button>
            <button>아니오</button>
          </S.DelModal>
        </Modal>
      )}
    </>
  )
}
