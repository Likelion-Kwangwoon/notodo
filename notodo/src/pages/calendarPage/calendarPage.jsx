import Calendar from "../../components/calendar";
import * as S from "./style"
import UserInfo from "../../components/UserInfo";
import MonthState from "../../components/MonthState";

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
