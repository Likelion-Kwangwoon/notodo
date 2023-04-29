import charRed from "../../assets/char-red.svg";
import charYellow from "../../assets/char-yellow.svg";
import charGrren from "../../assets/char-green.svg";
import * as S from "./style";
import { useSelector } from "react-redux";

export default function MonthState() {
  const list = useSelector((state) => state.list);

  return (
    <S.StateUl>
      <S.StateLi>
        <img src={charGrren} alt="" />
        <span>{list?.suc}</span>
      </S.StateLi>
      <S.StateLi>
        <img src={charYellow} alt="" />
        <span>{list?.uncheck}</span>
      </S.StateLi>
      <S.StateLi>
        <img src={charRed} alt="" />
        <span>{list?.fail}</span>
      </S.StateLi>
    </S.StateUl>
  );
}
