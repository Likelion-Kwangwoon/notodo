import { Ul, Li } from './style'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/store'
export default function SettingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    dispatch(logOut());
    navigate("/");
  };
  return (
    <Ul>
      <Li onClick={()=>{}}>이용약관</Li>
      <Li onClick={handleLogout}>로그아웃</Li>
      <Li onClick={()=>{}}>계정 탈퇴</Li>
    </Ul>
  )
}