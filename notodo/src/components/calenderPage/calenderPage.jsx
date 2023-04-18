import Calendar from "../calendar";
import * as S from "./style"
import UserInfo from "../UserInfo";
import MonthState from "../MonthState";

export default function calenderPage() {
  return (
    <S.Section>
      <S.Wrap>
        <UserInfo />
        <MonthState />
      </S.Wrap>
      <Calendar />
    </S.Section>
  )
}
