import * as S from "./style"
import { useState } from 'react'
import { followUser, deleteFollower } from '../../../api/api'
import { useNavigate } from 'react-router-dom'
import Modal from "../../Modal"

export default function SearchedListComp({ result, handleSearch }) {
  const [showPopup, setShowPopup] = useState(false)
  const navigate = useNavigate()
  const handleCancel = () => {
    setShowPopup(false)
  }

  const handleFollow = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const res = await followUser({ "email": result.email })
    res && handleSearch()
  }

  const handleUnfollow = async (e) => {
    e.stopPropagation();
    e.preventDefault();

    const res = await deleteFollower({ "email" : result.email });
    res && handleSearch()
    handleCancel();
  }
  return (
    <>
      <S.UserLi onClick={() => result.me ? navigate(`/mycalendar`) : navigate(`/yourcalendar/${result.email}`, {state : { user : result }})}>
        <img src={result.thumbnail} alt="" />
        <div>
          <p>{result.nickname}</p>
          <p>{result.email}</p>
        </div>
        {
          result.me ? <></> :
            result.friend?
              <S.FollowBtn className="sub" onClick={e => {
                e.stopPropagation();
                e.preventDefault();
                setShowPopup(true)
              }}>
                팔로잉
              </S.FollowBtn>
            :
              <S.FollowBtn
                onClick={(e) => handleFollow(e)}>
                팔로우
              </S.FollowBtn>
          }
      </S.UserLi>

      {showPopup && (
        <Modal onClose={handleCancel}>
          <S.FollowModal>
            {
              result.friend &&
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

