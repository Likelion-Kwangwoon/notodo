import * as S from './style'

import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { getUserInfo, followUser, deleteFollowing  } from '../../api/api'

import iconCalendar from '../../assets/icon-calendar.svg'
import Logo from '../../assets/logo.svg'
import iconDesc from '../../assets/icon-desc.svg'
import iconShare from '../../assets/icon-share.svg'
import Modal from '../Modal'
import GuidePopup from '../Popup/GuidePopup'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
  const divRef = useRef(null)
  const [showPopup, setShowPopup] = useState(false)
  const [userInfo, setUserInfo] = useState("")
  const [isFriend, setIsFriend] = useState(false)
  const isFollowPage = location.pathname.includes("follow")
  const isSettingPage = location.pathname.includes("setting")
  const isCalendarPage = location.pathname.includes("calendar")
  const isMyCalendarPage = location.pathname.includes("/my")
  const isNoToDoPage = location.pathname.includes("notodo")

  const handleCancel = () => {
    setShowPopup(false)
  }

  const handleFollow = async () => {
    const res = await followUser({ "email": location.state.user.email })
    res && setIsFriend(true)
  }

  const handleUnFollow = async () => {
    const res = await deleteFollowing({ "email": location.state.user.email })
    res && setIsFriend(false)
  }

  const handleGetUserInfo = async () => {
    if (isMyCalendarPage) {
      const res = await getUserInfo()

      setUserInfo(res.email)
    }
  }

  const onShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "NOTODO",
        text: "내가 만든 낫투두리스트, 구경 하러 와~!",
        url: `https://98ca-122-35-214-41.ngrok-free.app/yourcalendar/${userInfo}`,
      })
    } else {
      alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  }

  useEffect(( ) => {
    console.log(location.state)
    setIsFriend(location.state?.user?.friend || location.state?.user?.following || (location.state?.user?.follower != null))
  }, [location.state])

  return (
    <>
      {
        <S.Wrapper className={!isNoToDoPage && !isFollowPage ? "on" : ""} ref={divRef}>
          {isFollowPage && <S.Title>친구 목록</S.Title>}
          {isSettingPage && <S.Title>설정</S.Title>}
          {isCalendarPage &&
            <S.Div>
              <div></div>
              <img src={Logo} width="80px" alt='로고' />

              {
                isMyCalendarPage ?
                  <button onClick={onShare}>
                    <img src={iconShare} alt='공유 아이콘' />
                  </button> :
                  isFriend?
                  <S.FollowBtn className={"sub"} onClick={handleUnFollow}>
                    팔로잉
                  </S.FollowBtn>
                  :
                  <S.FollowBtn className={"main"} onClick={handleFollow}>
                    팔로우
                  </S.FollowBtn>
              }
            </S.Div>}
          {isNoToDoPage &&
            <S.Div>
              <button onClick={() => navigate(!params.id ? "/mycalendar" : `/yourcalendar/${params.id}`)}>
                <img src={iconCalendar} alt='캘린더 아이콘' />
              </button>
              <img src={Logo} width="80px" alt='로고' />
              <button onClick={() => setShowPopup(true)}>
                <img src={iconDesc} alt='도움말 아이콘' />
              </button>
            </S.Div>}
        </S.Wrapper>
      }
      {
        showPopup &&
        <Modal onClose={handleCancel}>
          <GuidePopup onClose={handleCancel} />
        </Modal>
      }
    </>
  )
}