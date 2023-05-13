import * as S from './style';
import iconClose from '../../../assets/icon-close.svg'
import iconSucFill from '../../../assets/icon-suc-fill.svg'
import iconFailFill from '../../../assets/icon-fail-fill.svg'
import Logo from '../../../assets/logo.svg'

export default function GuidePopup({onClose}) {
  return (
    <S.Wrap>
      <S.Inner>
        <div><button onClick={onClose}><img src={iconClose} alt='닫기 아이콘' width="20px" /></button></div>
        <img src={Logo} alt='로고' width="80px" />

        <img src={Logo} alt='로고' width="44px" />
        <span> 는 <S.Bold>하지 말아야 할 목록(Not To Do List)</S.Bold>을 적는 곳입니다!</span>

        <p>일상에서 하지 말아야 할 목록을 쉽게 작성하고, 목표를 설정하여 평소에 가지고 있던 불필요하거나 해로운 습관이나 행동을 줄이고 더 나은 삶을 살 수 있도록 도와주는 서비스입니다.</p>

        <p><S.Bold>캘린더 화면</S.Bold></p>
        <p>1개 이상 실패했을 경우</p>
        <p>체크하지 않은 NOTODO가 있는 경우</p>
        <p>모두 성공했을 경우</p>
        <p>오늘 표시</p>

        <p><S.Bold>리스트 화면</S.Bold></p>
        <p>작성한 NOTODO를 하루동안 정말 하지 않았다면 <img src={iconSucFill} width="14px" alt='성공 아이콘' /> 버튼을, 지키지 못했다면 <img src={iconFailFill} width="14px" alt='실패 아이콘' /> 버튼을 눌러주세요!</p>

        <p>친구들과 NOTODO를 공유하며 서로 동기부여를 주고 받으면서 나쁜 습관을 고쳐보아요 :)</p>
      </S.Inner>
    </S.Wrap>
  )
}