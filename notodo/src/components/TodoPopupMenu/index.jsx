import * as S from './style';

export default function TodoPopupMenu(props) {
  const handleEdit = () => {
    props.onEdit(props.id)
  }

  const handleDelete = () => {
    props.onDelete(props.id)
  }

  const handleCancel = () => {
    props.onCancel()
  }

  return (
    <S.Div>
      <S.Btn onClick={handleEdit}>리스트 수정</S.Btn>
      <S.Btn onClick={handleDelete}>리스트 삭제</S.Btn>
      <S.Btn onClick={handleCancel}>취소</S.Btn>
    </S.Div>
  )
}