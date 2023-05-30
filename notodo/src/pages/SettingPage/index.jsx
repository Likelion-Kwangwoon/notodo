import * as S from './style'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/store'
import { postWithdrawal } from '../../api/api';
import { useState } from 'react';
import Modal from '../../components/Modal';

export default function SettingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false)

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    dispatch(logOut());
    navigate("/");
  };

  const handleWithdrawal = async () => {
    const res = await postWithdrawal()

    if (res === 200) {
      setShowPopup(false)
      sessionStorage.clear()
      window.location.replace("/");
    }
  }

  return (
    <>
      <S.Ul>
        <S.Li onClick={()=>{}}>이용약관</S.Li>
        <S.Li onClick={handleLogout}>로그아웃</S.Li>
        <S.Li onClick={() => setShowPopup(true)}>계정 탈퇴</S.Li>
      </S.Ul>
      {showPopup && (
        <Modal onClose={() => setShowPopup(false)}>
          <S.ModalStyle>
            <p>정말 탈퇴하시겠습니까?</p>
            <p>탈퇴 시 모든 사용자 정보가 삭제됩니다.</p>
            <S.ModalBtn onClick={handleWithdrawal}>네</S.ModalBtn>
            <S.ModalBtn className="sub" onClick={() => setShowPopup(false)}>아니오</S.ModalBtn>
          </S.ModalStyle>
        </Modal>
      )}
    </>
  )
}