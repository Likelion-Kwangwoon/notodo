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

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()
  
  return (
    <S.NavWrap>
      <S.NavUl>
        <S.NavLi
          className={location.pathname.includes('/my') || 
          location.pathname.includes('/notodo') ? 'on' : 'off'}
          onClick={() => navigate('/mycalendar')}>
            <img src={location.pathname.includes('/my') || 
            location.pathname.includes('/notodo') ? iconHomeFill : iconHome} />
            <p>홈</p>
        </S.NavLi>
        <S.NavLi
          className={location.pathname.includes('/search') ? 'on' : 'off'}
          onClick={() => navigate('/search')}>
            <img src={location.pathname.includes("/search") ? iconSearchFill : iconSearch} />
            <p>검색</p>
        </S.NavLi>
        <S.NavLi
          className={location.pathname.includes('/follow') ? 'on' : 'off'}
          onClick={() => navigate('/follow')}>
            <img src={location.pathname.includes("/follow") ? iconHeartFill : iconHeart} />
            <p>친구</p>
        </S.NavLi>
        <S.NavLi
          className={location.pathname.includes('/setting') ? 'on' : 'off'}
          onClick={() => navigate('/setting')}>
            <img src={location.pathname.includes("/setting") ? iconProfileFill : iconProfile} />
            <p>설정</p>
        </S.NavLi>
      </S.NavUl>
    </S.NavWrap>
  )
}
