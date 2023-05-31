import * as S from './style'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { getUserInfo, followUser, deleteFollower } from '../../api/api'
import iconCalendar from '../../assets/icon-calendar.svg'
import Logo from '../../assets/logo.svg'
import iconDesc from '../../assets/icon-desc.svg'
import iconShare from '../../assets/icon-share.svg'
import Modal from '../Modal'
import GuidePopup from '../Popup/GuidePopup'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const divRef = useRef(null)
  const [modalWidth, setModalWidth] = useState("0px")
  const [showPopup, setShowPopup] = useState(false)
  const [userInfo, setUserInfo] = useState("")
  const [isFriend, setIsFriend] = useState(location.pathname.includes("your")? location.state.user.friend : "")
  const isFollowPage = location.pathname.includes("follow")
  const isSettingPage = location.pathname.includes("setting")
  const isCalendarPage = location.pathname.includes("calendar")
  const isMyCalendarPage = location.pathname.includes("/my")
  const isNoToDoPage = location.pathname.includes("notodo")

  const handleCancel = () => {
    setShowPopup(false)
  }

  const handleFollow = async () => {
    console.log(location.state)
    const res = await followUser({ "email": location.state.user.email })
    res && setIsFriend(true)
  }

  const handleUnFollow = async () => {
    const res = await deleteFollower({ "email": location.state.user.email })
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

  useEffect(() => {
    const width = divRef.current.offsetWidth
    setModalWidth(`${width}px`)
    handleGetUserInfo()
  }, [location.pathname])

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
                  location.state.user.friend ?
                  <S.FollowBtn className={isFriend && "sub"} onClick={handleFollow}>
                    팔로잉
                  </S.FollowBtn>
                  :
                  <S.FollowBtn className={isFriend && "sub"} onClick={handleUnFollow}>
                    팔로우
                  </S.FollowBtn>
              }
            </S.Div>}
          {isNoToDoPage &&
            <S.Div>
              <button onClick={() => navigate("/mycalendar")}>
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
        <Modal width={modalWidth} onClose={handleCancel}>
          <GuidePopup onClose={handleCancel} />
        </Modal>
      }
    </>
  )
}