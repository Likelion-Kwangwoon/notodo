import charRed from "../../assets/char-red.svg";
import charYellow from "../../assets/char-yellow.svg";
import charGrren from "../../assets/char-green.svg";
import * as S from "./style";

export default function MonthState() {
  return (
    <S.StateUl>
      <S.StateLi>
        <img src={charGrren} alt="" />
        <span>10</span>
      </S.StateLi>
      <S.StateLi>
        <img src={charYellow} alt="" />
        <span>10</span>
      </S.StateLi>
      <S.StateLi>
        <img src={charRed} alt="" />
        <span>10</span>
      </S.StateLi>
    </S.StateUl>
  );
}
