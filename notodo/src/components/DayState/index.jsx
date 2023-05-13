import * as S from './style'
import iconPlus from '../../assets/icon-plus.svg'

export default function DayState({tasks, successful, failed, handleAddButtonClick}) {

  return (
    <S.Status>
      <S.ResultWrap>
        <span>{tasks}</span>
        <span>{successful}</span>
        <span>{failed}</span>
      </S.ResultWrap>
      <S.AddBtn onClick={handleAddButtonClick}><img src={iconPlus} alt="" /></S.AddBtn>
    </S.Status>
  )
}