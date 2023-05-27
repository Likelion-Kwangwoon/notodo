import { useState } from "react"
import Modal from "../../Modal"
import * as S from "./style"
import { FollowBtn, FollowModal, ModalBtn } from "../../SearchedList/SearchedListComp/style"

export default function UserListComp({ user, isFollower }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleCancel = () => {
    setShowPopup(false)
  }

  return (
    <>
      <S.UserLi>
        <img src={user.thumbnail} alt="" />
        <div>
          <p>{user.nickname}</p>
          <p>{user.email}</p>
        </div>
        {
          isFollower ?
            <FollowBtn>팔로우</FollowBtn>
            :
            <FollowBtn className="sub" onClick={() => setShowPopup(true)}>팔로잉</FollowBtn>
        }
      </S.UserLi>

      {showPopup && (
        <Modal onClose={handleCancel}>
          <FollowModal>
            <p>팔로잉을 취소하시겠습니까?</p>
            <ModalBtn>네</ModalBtn>
            <ModalBtn className="sub" onClick={() => setShowPopup(false)}>아니오</ModalBtn>
          </FollowModal>
        </Modal>
      )}
    </>
  )
}
