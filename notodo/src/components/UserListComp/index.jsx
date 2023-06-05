import { useState } from "react"
import Modal from "../Modal"
import * as S from "./style"
import { FollowBtn, FollowModal, ModalBtn } from "../SearchedList/SearchedListComp/style"
import { deleteFollower, deleteFollowing } from "../../api/api"
import { useNavigate } from "react-router-dom"

export default function UserListComp({ user, isFollower, handleIsFollower, handleIsFollowing }) {
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const handleDeleteFollower = async () => {
    const res = await deleteFollower({ "email": user.email })
    res === 200 && handleIsFollower()
    setShowPopup(false)
  }

  const handleDeleteFollowing = async () => {
    const res = await deleteFollowing({ "email": user.email })
    res === 200 && handleIsFollowing()
    setShowPopup(false)
  }

  return (
    <>
      <S.UserLi onClick={() => navigate(`/yourcalendar/${user.email}`, {state : { user : { user } }})}>
        <img src={user.thumbnail} alt="" />
        <div>
          <p>{user.nickname}</p>
          <p>{user.email}</p>
        </div>
        {
          isFollower ?
            <FollowBtn className="sub" onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setShowPopup(true)
            }}>삭제</FollowBtn>
            :
            <FollowBtn onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setShowPopup(true)
            }} className="sub">팔로잉</FollowBtn>
        }
      </S.UserLi>

      {showPopup && (
        <Modal onClose={() => setShowPopup(false)}>
          <FollowModal>
            <p>정말 삭제하시겠습니까?</p>
            <ModalBtn onClick={isFollower ? handleDeleteFollower : handleDeleteFollowing}>네</ModalBtn>
            <ModalBtn className="sub" onClick={() => setShowPopup(false)}>아니오</ModalBtn>
          </FollowModal>
        </Modal>
      )}
    </>
  )
}
