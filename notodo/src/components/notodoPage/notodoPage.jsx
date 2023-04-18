import * as S from './style';
import iconCalendar from '../../assets/icon-calendar.svg';
import Logo from '../../assets/logo.svg';
import iconUpDisabled from '../../assets/icon-up-gray.svg';
import iconUpActived from '../../assets/icon-up-green.svg';
import iconDownDisabled from '../../assets/icon-down-gray.svg';
import iconDownActived from '../../assets/icon-down-red.svg';
import iconPlus from '../../assets/icon-plus.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';

function NotodoPage() {
  // 임시 데이터 ^0^
  const date = [
    {
      weekday: "일",
      day: "11"
    },
    {
      weekday: "월",
      day: "12"
    },
    {
      weekday: "화",
      day: "13"
    },
    {
      weekday: "수",
      day: "14"
    },
    {
      weekday: "목",
      day: "15"
    },
    {
      weekday: "금",
      day: "16"
    },
    {
      weekday: "토",
      day: "17"
    },
  ]

  const data = [
    {
      id: 1,
      content: "노래부르기",
      status: {
        successed: false,
        failed: false
      },
    },
    {
      id: 2,
      content: "노래부르기",
      status: {
        successed: true,
        failed: false
      },
    },
    {
      id: 3,
      content: "노래부르기",
      status: {
        successed: true,
        failed: false
      },
    },
    {
      id: 4,
      content: "말하기",
      status: {
        successed: false,
        failed: true
      },
    },
  ]

  const [notodoList, setNotodoList] = useState(data)
  const [inputValue, setInputValue] = useState("")
  const [isAdding, setIsAdding] = useState(false)

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [notodoList]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const getInputWidth = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    const inputValue = inputRef.current.value || '';
    const inputWidth = inputValue.length * 12;
    inputRef.current.style.width = `${inputWidth}px`;
  }, []);

  useEffect(() => {
    getInputWidth();
  }, [getInputWidth, inputValue]);

  const handleInputBlur = () => {
    if (inputValue.trim() !== "") {
      const data = [{
        id: Date.now(),
        content: inputValue,
        status: {
          successed: false,
          failed: false,
        }
      }, ...notodoList.slice(1,)
      ]
      setNotodoList(data)
      setInputValue("")
      setIsAdding(false)
    }
  }

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      handleInputBlur()
    }
  }

  const handleAddButtonClick = () => {
    if (!isAdding) {
      setIsAdding(true)
      const newItem = {
        id: Date.now(),
        content: inputValue,
        status: {
          successed: false,
          failed: false,
        },
      }
      setNotodoList([newItem, ...notodoList])
      inputRef?.current?.focus()
    }
  }

  const handleItemClick = (id, type) => {
    const newData = notodoList.map(item => {
      if (item.id === id && !isAdding) {
        if (type === "successed") {
          return {
            ...item,
            status: {
              successed: !item.status.successed,
              failed: false,
            },
          }
        } else {
          return {
            ...item,
            status: {
              successed: false,
              failed: !item.status.failed,
            },
          }
        }
      }
      return item
    })
    setNotodoList(newData)
  }

  return (
    <S.Div>
      <S.Header>
        <div>
          <button><S.CalImg src={iconCalendar} /></button>
          <S.Logo src={Logo} />
        </div>
        <S.WeekPicker>
          {
            date.map(i => (
              <S.PickBtn key={i.weekday}>
                <p>{i.weekday}</p>
                {
                  i.weekday === "수" ? <div><p>{i.day}</p></div> : <p>{i.day}</p>
                }
              </S.PickBtn>
            ))
          }
        </S.WeekPicker>
      </S.Header>
      <S.NotodoWrap>
        {
          notodoList.map(i => (
            <S.NotodoLi key={i.id}>
              <S.ContentWrap>
                {i.content === "" ? (
                  <input type="text" value={inputValue} onChange={handleInputChange} onBlur={handleInputBlur} onKeyDown={handleInputKeyDown} ref={inputRef} />) :
                  <p>{i.content}</p>}
                <p>금지</p>
              </S.ContentWrap>
              <button onClick={() => handleItemClick(i.id, "successed")} ><img src={i.status.successed ? iconUpActived : iconUpDisabled} /></button>
              <button onClick={() => handleItemClick(i.id, "failed")}><img src={i.status.failed ? iconDownActived : iconDownDisabled} /></button>
            </S.NotodoLi>
          ))
        }
      </S.NotodoWrap>
      <S.Footer>
        <S.ResultWrap>
          <span>{notodoList.length}</span>
          <span>{notodoList.filter(i => i.status.successed).length}</span>
          <span>{notodoList.filter(i => i.status.failed).length}</span>
        </S.ResultWrap>
        <S.AddBtn onClick={handleAddButtonClick}><img src={iconPlus} /></S.AddBtn>
      </S.Footer>
    </S.Div>
  );
}

export default NotodoPage;