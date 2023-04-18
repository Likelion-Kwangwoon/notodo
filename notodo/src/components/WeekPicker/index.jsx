import * as S from "./style"
import dayjs from "dayjs"
import { useDispatch, useSelector } from 'react-redux';
import updateLocale from "dayjs/plugin/updateLocale"
import { setDate } from "../../redux/slice/dateSlice";

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  weekdays: [
    "일", "월", "화", "수", "목", "금", "토"
  ]
})

export default function WeekPicker() {
  const date = useSelector(state => state.date.date)
  const week = dayjs(date).startOf('week')
  const dispatch = useDispatch()

  
  const handleSetDate = num => {
    dispatch(setDate((week.add(num, 'days').format('YYYY-MM-DD'))))
  }
  
  return (
    <S.WeekPicker>
      {
        Array(7).fill().map((_, i) => 
          <S.PickBtn key={i} onClick={() => handleSetDate(i)}>
            <p>{week.add(i, 'days').format('dd')}</p>
            <p className={dayjs(date).date().toString() === week.add(i, 'days').format('D') ? 'pick' : ''}>
              {week.add(i, 'days').format('D')}</p>
          </S.PickBtn>
        )
      }
    </S.WeekPicker>
  )
}
