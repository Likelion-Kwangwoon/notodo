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

  useEffect(() => {
    const width = divRef.current.offsetWidth
    setModalWidth(`${width}px`)
  }, [])

  return (
    <>
      {
        !location.pathname.includes('/search') &&
        <S.Wrapper className={!location.pathname.includes('/notodo') && !location.pathname.includes('/follow') ? "on" : ""} ref={divRef}>
          {location.pathname.includes('/follow') && <S.Title>친구 목록</S.Title>}
          {location.pathname.includes('/setting') && <S.Title>설정</S.Title>}
          {location.pathname.includes('/calendar') &&
            <S.Div>
              <div></div>
              <img src={Logo} width="80px" />

              {/* 친구 페이지에서는 팔로우 버튼으로 */}
              <button onClick={() => { }}>
                <img src={iconShare} />
              </button>
            </S.Div>}
          {location.pathname.includes('/notodo') &&
            <S.Div>
              <button onClick={() => { navigate("/calendar") }}>
                <img src={iconCalendar} />
              </button>
              <img src={Logo} width="80px" />
              <button onClick={() => { setShowPopup(true) }}>
                <img src={iconDesc} />
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