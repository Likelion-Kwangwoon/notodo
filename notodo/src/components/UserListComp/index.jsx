import { useState } from "react"
import Modal from "../Modal"
import * as S from "./style"
import { FollowBtn, FollowModal, ModalBtn } from "../SearchedList/SearchedListComp/style"
import { deleteFollower } from "../../api/api"

export default function UserListComp({ user, isFollower, handleIsFollower }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleDeleteFollower = async () => {
    const res = await deleteFollower({ "email": user.email })
    res && handleIsFollower()
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
            <FollowBtn className="sub" onClick={() => setShowPopup(true)}>삭제</FollowBtn>
            :
            <FollowBtn className="sub">팔로잉</FollowBtn>
        }
      </S.UserLi>

      {showPopup && (
        <Modal onClose={() => setShowPopup(false)}>
          <FollowModal>
            <p>정말 삭제하시겠습니까?</p>
            <ModalBtn onClick={handleDeleteFollower}>네</ModalBtn>
            <ModalBtn className="sub" onClick={() => setShowPopup(false)}>아니오</ModalBtn>
          </FollowModal>
        </Modal>
      )}
    </>
  )
}
