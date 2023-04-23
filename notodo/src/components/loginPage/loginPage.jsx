import { useEffect } from 'react';
import { KAKAO_AUTH_URL } from '../../SocialOAuth';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { TitleLogo, KakaoButton } from './style';
import kakaoLogo from '../../assets/icon-kakao.svg'

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
    <>
      <TitleLogo src={logo} alt="" />
      <KakaoButton onClick={handleLogin}>
        <img src={kakaoLogo} alt="" />
        <p>카카오로 로그인하기</p>
      </KakaoButton>
    </>
  );
}

export default LoginPage;