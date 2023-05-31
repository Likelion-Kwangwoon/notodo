import { useLocation, useNavigate } from "react-router-dom"
import * as S from "./style"
import iconHome from "../../assets/icon-home.svg"
import iconHomeFill from "../../assets/icon-home-fill.svg"
import iconSearch from "../../assets/icon-search.svg"
import iconSearchFill from "../../assets/icon-search-fill.svg"
import iconHeart from "../../assets/icon-heart.svg"
import iconHeartFill from "../../assets/icon-heart-fill.svg"
import iconProfile from "../../assets/icon-profile.svg"
import iconProfileFill from "../../assets/icon-profile-fill.svg"
import { useEffect, useState } from 'react'

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [savelocation, setSaveLocation] = useState('')
  const isNavLoc = (
    location.pathname === "/mycalendar" || 
    location.pathname === "/search" ||
    location.pathname === "/follow" ||
    location.pathname === "/setting"
    )
  
  useEffect(() => {
    if(isNavLoc)
      setSaveLocation(location.pathname)
  }, [location.pathname])
  
  return (
    <S.NavWrap>
      <S.NavUl>
        <S.NavLi
          className={savelocation === "/mycalendar" ? 'on' : 'off'}
          onClick={() => navigate('/mycalendar')}>
            <img src={savelocation === "/mycalendar" ? iconHomeFill : iconHome} />
            <p>홈</p>
        </S.NavLi>
        <S.NavLi
          className={savelocation === "/search" ? 'on' : 'off'}
          onClick={() => navigate('/search')}>
            <img src={savelocation === "/search" ? iconSearchFill : iconSearch} />
            <p>검색</p>
        </S.NavLi>
        <S.NavLi
          className={savelocation === "/follow" ? 'on' : 'off'}
          onClick={() => navigate('/follow')}>
            <img src={savelocation === "/follow" ? iconHeartFill : iconHeart} />
            <p>친구</p>
        </S.NavLi>
        <S.NavLi
          className={savelocation === "/setting" ? 'on' : 'off'}
          onClick={() => navigate('/setting')}>
            <img src={savelocation === "/setting" ? iconProfileFill : iconProfile} />
            <p>설정</p>
        </S.NavLi>
      </S.NavUl>
    </S.NavWrap>
  )
}
