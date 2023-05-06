import * as S from "./style";
import { useSelector } from "react-redux";

export default function MonthState() {
  const list = useSelector((state) => state.list);

  return (
    <S.StateUl>
      <S.StateLi>
        <span>{list?.suc}</span>
      </S.StateLi>
      <S.StateLi>
        <span>{list?.fail}</span>
      </S.StateLi>
    </S.StateUl>
  );
}
