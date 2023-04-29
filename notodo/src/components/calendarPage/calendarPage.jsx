import Calendar from "../calendar";
import * as S from "./style"
import UserInfo from "../UserInfo";
import MonthState from "../MonthState";

export default function calendarPage() {
  return (
    <>
      <S.Wrap>
        <UserInfo />
        <MonthState />
      </S.Wrap>
      <Calendar />
    </>
  )
}
