import * as S from './style';
import iconCalendar from '../../assets/icon-calendar.svg';
import Logo from '../../assets/logo.svg';
import iconUpDisabled from '../../assets/icon-up-gray.svg';
import iconUpActived from '../../assets/icon-up-green.svg';
import iconDownDisabled from '../../assets/icon-down-gray.svg';
import iconDownActived from '../../assets/icon-down-red.svg';
import iconPlus from '../../assets/icon-plus.svg';
import WeekPicker from "../WeekPicker"
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postList, getContent } from "../../api/api.js";

function NotodoPage() {
  const date = useSelector(state => state.date.date)
  const [notodoList, setNotodoList] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const navigate = useNavigate()
  const inputRef = useRef(null)

  const fetchData = async () => {
    console.log(date)
    const data = await getContent(date)
    console.log(data)
    setNotodoList(data)
  }

  useEffect(() => {
    fetchData()
  }, [date])

  useEffect(() => {
    inputRef.current?.focus()
  }, [notodoList])

  useEffect(() => {
    getInputWidth()
  }, [inputValue])

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const getInputWidth = useCallback(() => {
    if (!inputRef.current) {
      return
    }
    const inputValue = inputRef.current.value || ''
    const inputWidth = getTextWidth(inputValue, inputRef.current.style.font)
    inputRef.current.style.width = `${inputWidth}px`
  }, [])

  function getTextWidth(text, font) {
    const span = document.createElement("span")
    span.style.font = font
    span.style.visibility = "hidden"
    span.style.position = "absolute"
    span.style.padding = "0px"
    span.style.boxSizing = "border-box"
    span.innerText = text
    document.body.appendChild(span)
    const width = span.offsetWidth
    document.body.removeChild(span)
    return width * 0.87
  }

  const handleInputBlur = async () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        content: inputValue,
        added: date
      }

      try {
        await postList(newItem)
        setNotodoList(await getContent(date))
        setInputValue("")
        setIsAdding(false)
      } catch (error) {
        console.error(error)
      }
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
        notodoId: Date.now(),
        content: inputValue,
        status: 0
      }
      setNotodoList([...notodoList, newItem])
      inputRef?.current?.focus()
    }
  }

  const handleItemClick = (id, type) => {
    const newData = notodoList.map(item => {
      if (item.notodoId === id && !isAdding) {
        if (type === "successed") {
          return item.status === 1 ? {
            ...item,
            status: 0
          } : {
            ...item,
            status: 1
          }
        } else {
          return item.status === 2 ? {
            ...item,
            status: 0
          } : {
            ...item,
            status: 2
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
          <button onClick={() => navigate('/calender')}><S.CalImg src={iconCalendar} /></button>
          <S.Logo src={Logo} />
        </div>
        <WeekPicker />
      </S.Header>
      <S.NotodoWrap>
        {
          notodoList.length ?
            [...notodoList].reverse().map(i => (
              <S.NotodoLi key={i.notodoId}>
                <S.ContentWrap>
                  {i.content === "" ? (
                    <>
                      <input type="text" value={inputValue} autoFocus onChange={handleInputChange} onBlur={handleInputBlur} onKeyDown={handleInputKeyDown} ref={inputRef} />
                    </>
                  ) :
                    <p>{i.content}</p>}
                  <p>금지</p>
                </S.ContentWrap>
                <button onClick={() => handleItemClick(i.notodoId, "successed")} ><img src={i.status === 1 ? iconUpActived : iconUpDisabled} /></button>
                <button onClick={() => handleItemClick(i.notodoId, "failed")}><img src={i.status === 2 ? iconDownActived : iconDownDisabled} /></button>
              </S.NotodoLi>
            )) : <S.Empty>새로운 낫투두리스트를 추가해 보세요!</S.Empty>
        }
      </S.NotodoWrap>
      <S.Footer>
        <S.ResultWrap>
          <span>{notodoList.length}</span>
          <span>{notodoList.filter(i => i.status === 1).length}</span>
          <span>{notodoList.filter(i => i.status === 2).length}</span>
        </S.ResultWrap>
        <S.AddBtn onClick={handleAddButtonClick}><img src={iconPlus} /></S.AddBtn>
      </S.Footer>
    </S.Div>
  )
}

export default NotodoPage;