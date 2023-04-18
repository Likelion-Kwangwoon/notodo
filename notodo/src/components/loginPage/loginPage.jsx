import React from 'react';
import { useEffect } from 'react';
import { KAKAO_AUTH_URL } from '../../SocialOAuth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { TitleLogo, KakaoButton } from './style';
import kakaobtn from '../../assets/kakao_login_medium_narrow.png';
function LoginPage() {

  const navigate = useNavigate();
  const token = useSelector((state) => state.reducer.token);

  useEffect(() => {
    if ( token !== "" ) {
      navigate('/calender');
    }
  },[navigate, token]);
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }
  return (
    <div>
      <TitleLogo src={logo} alt="" />
      <KakaoButton onClick={handleLogin}>
        <img src={kakaobtn} alt=''/>
      </KakaoButton>
    </div>
  );
}

export default LoginPage;