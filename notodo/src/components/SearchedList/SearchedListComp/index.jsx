import * as S from "./style"
import { useState } from 'react'
import { followUser } from '../../../api/api'
import Modal from "../../Modal"

export default function SearchedListComp(props) {
  const [showPopup, setShowPopup] = useState(false)
  const handleCancel = () => {
    setShowPopup(false)
  }
  const handleFollow = (data) => {
    followUser({ "email":data })
  }
  return (
    <>
    <S.UserLi>
        <img src={props.user.thumbnail} alt="" />
        <div>
          <p>{props.user.nickname}</p>
          <p>{props.user.email}</p>
        </div>
        {
          props.user.friend?
          <button onClick={() => setShowPopup(true)}>팔로잉</button>
          :
          <button onClick={() => setShowPopup(true)}>팔로우</button>
        }
      </S.UserLi>

      {showPopup && (
        <Modal onClose={handleCancel}>
          <S.FollowModal>
            {
              props.user.friend?
              <div>
                <p>정말 삭제하시겠습니까?</p>
                <button onClick={handleCancel}>네</button>
                <button onClick={handleCancel}>아니오</button>
              </div>
              :
              <div>
                <p>팔로우 하시겠습니까?</p>
                <button onClick={handleFollow(props.user.email)}>네</button>
                <button onClick={handleCancel}>아니오</button>
              </div>
            }
          </S.FollowModal>
        </Modal>
      )}
    </>
  )
}

