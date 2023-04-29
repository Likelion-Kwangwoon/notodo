import * as S from "./style"
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import weekOfYear from "dayjs/plugin/weekOfYear"
import iconLeftArrow from "../../assets/icon-leftArrow.svg"
import iconRightArrow from "../../assets/icon-rightArrow.svg"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDate } from "../../redux/slice/dateSlice";
import { getContent } from "../../api/api";
import { CharList } from "../../assets/CharList";
import { failList, resetList, sucList, uncheckList } from "../../redux/slice/listSlice";

dayjs.extend(objectPlugin);
dayjs.extend(weekdayPlugin);
dayjs.extend(weekOfYear)

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [arrayOfDays, setArrayOfDays] = useState([]);
  const [stateArr, setStateArr] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const printPercentage = async (month) => {
    const arr = []
    const resultArr = []

    const startDay = month.startOf('month').date()
    const endDay = month.endOf('month').date()
    for (let i = startDay; i < endDay; i++) {
      arr.push(getContent(dayjs(`${month.year()}-${month.month() + 1}-${i}`).format('YYYY-MM-DD')))
    }

    const res = await Promise.all(arr)
  
    for (const value of res) {
      let result;
      if (value.length) {
        for (let i = 0; i < value.length; i++) {
          if (value[i].status === 2) {
            result = 3
            break;
          } else if (value[i].status === 0) {
            result = 1
          } else result = 2
        }
      } 
      else result = 0
      resultArr.push(result)
    }

    for (const i of resultArr) {
       switch (i) {
        case 3:
          dispatch(failList())
          break;
        case 2:
          dispatch(sucList())
          break;
        case 1:
          dispatch(uncheckList())
          break;
        default:
          break;
      }
    }
    
    setStateArr(resultArr);
  }

  const handleGetDay = (date) => {
    dispatch(setDate(dayjs(`${date.year}-${(date.month + 1)}-${(date.day)}`).format('YYYY-MM-DD'))) && navigate('/notodo')
  }

  const nextMonth = () => {
    const plus = currentMonth.add(1, "month");
    setCurrentMonth(plus);
  };

  const prevMonth = () => {
    const minus = currentMonth.subtract(1, "month");
    setCurrentMonth(minus);
  };

  const renderHeader = () => {
    return (
      <S.Header>
        <button onClick={() => prevMonth()}>
          <img src={iconLeftArrow} alt="" />
        </button>
        <span>{currentMonth.format('YYYY.MM')}</span>
        <button onClick={() => nextMonth()}>
          <img src={iconRightArrow} alt="" />
        </button>
      </S.Header>
    );
  };

  const renderDays = () => {
    const days = ["일", "월", "화", "수", "목", "금", "토"];
    return <S.DayWrap>{days.map(i => <span key={i}>{i}</span>)}</S.DayWrap>
  };

  const formateDateObject = date => {
    const clonedObject = { ...date.toObject() };
    const formatedObject = {
      day: clonedObject.date,
      month: clonedObject.months,
      year: clonedObject.years,
      isCurrentMonth: clonedObject.months === currentMonth.month(),
    };
    return formatedObject;
  };

  const getAllDays = () => {
    let currentDate = currentMonth.startOf("month").weekday(0);
    const nextMonth = currentMonth.add(1, "month").month();
    let allDates = [];
    let weekDates = [];
    let weekCounter = 1;
    while (currentDate.weekday(0).toObject().months !== nextMonth) {
      const formated = formateDateObject(currentDate);
      weekDates.push(formated);
      if (weekCounter === 7) {
        allDates.push({ dates: weekDates });
        weekDates = [];
        weekCounter = 0;
      }
      weekCounter++;
      currentDate = currentDate.add(1, "day");
    }
    setArrayOfDays(allDates);
  };

  const renderCells = () => {
    const rows = [];
    let days = [];
    arrayOfDays.forEach((week, index) => {
      week.dates.forEach((d, i) => {
        days.push(
          <S.CellWrap onClick={() => handleGetDay(d)}
            className={!d.isCurrentMonth ? "disabled" : ""} key={i}>
            <span> {d.day} </span>
            {d.isCurrentMonth && <img src={CharList[stateArr[d.day-1]-1]} alt="" />}
          </S.CellWrap>
        );
      });
      rows.push(
        <S.RowWrap key={index}>
          {days}
        </S.RowWrap>
      );
      days = [];
    });
    return <>{rows}</>;
  };

  useEffect(() => {
    dispatch(resetList())
    getAllDays();
    printPercentage(currentMonth)
  }, [currentMonth]);

  return (
    <S.Wrap  >
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </S.Wrap>
  )
}
