import * as S from "./style"
import { useState } from 'react'
import { followUser, deleteFollower } from '../../../api/api'
import { useNavigate } from 'react-router-dom'
import Modal from "../../Modal"

export default function SearchedListComp(props) {
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()

  const handleCancel = () => {
    setShowPopup(false)
  }

  const handleFollow = (e, data) => {
    e.stopPropagation();
    e.preventDefault();

    followUser({ "email": data })
  }

  const handleUnfollow = (e) => {
    e.stopPropagation();
    e.preventDefault();

    deleteFollower({ "email" : props.user.email });
    handleCancel();
  }
  return (
    <>
      <S.UserLi onClick={() => props.user.me ? navigate(`/mycalendar`) : navigate(`/yourcalendar/${props.user.email}`, {state : { user : props }})}>
        <img src={props.user.thumbnail} alt="" />
        <div>
          <p>{props.user.nickname}</p>
          <p>{props.user.email}</p>
        </div>
        {
          props.user.me ? <></> :
            props.user.friend?
              <S.FollowBtn className="sub" onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                setShowPopup(true)
              }}>
                팔로잉
              </S.FollowBtn>
            :
              <S.FollowBtn
                onClick={(e) => handleFollow(e, props.user.email)}>
                팔로우
              </S.FollowBtn>
          }
      </S.UserLi>

      {showPopup && (
        <Modal onClose={handleCancel}>
          <S.FollowModal>
            {
              props.user.friend &&
              <>
                <p>정말 삭제하시겠습니까?</p>
                <S.ModalBtn onClick={handleUnfollow}>네</S.ModalBtn>
                <S.ModalBtn className="sub" onClick={handleCancel}>아니오</S.ModalBtn>
              </>
            }
          </S.FollowModal>
        </Modal>
      )}
    </>
  )
}

