import * as S from './style'
import iconPlus from '../../assets/icon-plus.svg'
import { useParams } from 'react-router-dom'

export default function DayState({ tasks, successful, failed, handleAddButtonClick }) {
  const params = useParams()

  return (
    <S.Status>
      <S.ResultWrap>
        <span>{tasks}</span>
        <span>{successful}</span>
        <span>{failed}</span>
      </S.ResultWrap>
      {
        !params.id &&
          <S.AddBtn onClick={handleAddButtonClick}><img src={iconPlus} alt="" /></S.AddBtn>
      }
    </S.Status>
  )
}