import * as S from './style'
import { useLocation, useNavigate } from 'react-router-dom'
import iconCalendar from '../../assets/icon-calendar.svg'
import Logo from '../../assets/logo.svg'
import iconDesc from '../../assets/icon-desc.svg'
import iconShare from '../../assets/icon-share.svg'
import Modal from '../Modal'
import GuidePopup from '../Popup/GuidePopup'
import { useState, useEffect, useRef } from 'react'


export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const divRef = useRef(null)
  const [modalWidth, setModalWidth] = useState("0px")
  const [showPopup, setShowPopup] = useState(false)

  const handleCancel = () => {
    setShowPopup(false)
  }

  const handleFollow = () => {
    // 팔로우 버튼 클릭 시 구현
  }

  const onShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'NOTODO',
        text: '내가 만든 낫투두리스트, 구경 하러 와~!',
        // yourcalendar/본인이메일 추가
        url: 'https://98ca-122-35-214-41.ngrok-free.app/yourcalendar/mesmerize_@nate.com',
      })
    }
    else
      alert("공유하기가 지원되지 않는 환경 입니다.")
  }

  useEffect(() => {
    const width = divRef.current.offsetWidth
    setModalWidth(`${width}px`)
  }, [])

  return (
    <>
      {
        !location.pathname.includes('search') &&
        <S.Wrapper className={!location.pathname.includes('notodo') && !location.pathname.includes('follow') ? "on" : ""} ref={divRef}>
          {location.pathname.includes('follow') && <S.Title>친구 목록</S.Title>}
          {location.pathname.includes('setting') && <S.Title>설정</S.Title>}
          {location.pathname.includes('calendar') &&
            <S.Div>
              <div></div>
              <img src={Logo} width="80px" alt='로고' />

              {
                location.pathname.includes('/my') ?
                  <button onClick={onShare}>
                    <img src={iconShare} alt='공유 아이콘' />
                  </button> :
                  <button onClick={handleFollow}>
                    <p>팔로우</p>
                  </button>
              }
            </S.Div>}
          {location.pathname.includes('/notodo') &&
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