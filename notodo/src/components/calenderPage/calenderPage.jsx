import Calendar from "../calendar";
import charRed from "../../assets/char-red.svg"
import charYellow from "../../assets/char-yellow.svg"
import charGrren from "../../assets/char-green.svg"
import * as S from "./style"
import UserInfo from "../UserInfo";

export default function calenderPage() {
  return (
    <>
      <S.Wrap>
        <UserInfo />
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
      </S.Wrap>
      <Calendar />
    </>
  )
}
