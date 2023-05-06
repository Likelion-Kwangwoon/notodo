import * as S from './style';
import iconCalendar from '../../assets/icon-calendar.svg';
import Logo from '../../assets/logo.svg';
import iconUpDisabled from '../../assets/icon-suc.svg';
import iconUpActived from '../../assets/icon-suc-fill.svg';
import iconDownDisabled from '../../assets/icon-fail.svg';
import iconDownActived from '../../assets/icon-fail-fill.svg';
import iconPlus from '../../assets/icon-plus.svg';
import WeekPicker from "../../components/WeekPicker"
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { postList, getContent, postSuccess, postFail } from "../../api/api.js";
import TodoPopupMenu from '../../components/TodoPopupMenu';
import Modal from '../../components/Modal';

function NotodoPage() {
  const date = useSelector(state => state.date.date)
  const [notodoList, setNotodoList] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [popupId, setPopupId] = useState(null)
  const [modalWidth, setModalWidth] = useState("0px")
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const divRef = useRef(null)
  const timeoutRef = useRef(null)

  const fetchData = async () => {
    const data = await getContent(date)
    setNotodoList(data)
  }

  useEffect(() => {
  }, [isEditing])

  useEffect(() => {
    const width = divRef.current.offsetWidth
    setModalWidth(`${width}px`)
  }, [])

  useEffect(() => {
    fetchData()
  }, [date])

  useEffect(() => {
    inputRef.current?.focus()
  }, [notodoList])

  useEffect(() => {
    getInputWidth()
  }, [inputValue])

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  // 리스트 입력 후 다른 창 눌렀을 때 등록 or 수정되게 하는 함수
  const handleInputBlur = async () => {
    if (inputValue.trim() !== "") {
      try {
        if (!isEditing[popupId]) {
          const newItem = {
            content: inputValue,
            added: date
          }
          await postList(newItem)
          setNotodoList(await getContent(date))
        }
        else {
          const updatedItem = notodoList.map(i => {
            if (i.notodoId === popupId) i.content = inputValue
            return i
          })
          setNotodoList(updatedItem)
          setIsEditing({})
        }
        setInputValue("")
        setIsAdding(false)
      } catch (error) {
        console.error(error)
      }
    }
  }

  // 리스트 입력 후 엔터키 눌렀을 때 등록 or 수정되게 하는 함수
  const handleInputKeyDown = event => {
    if (event.key === "Enter") {
      event.preventDefault()
      handleInputBlur()
      setIsEditing({})
    }
  }

  // 추가 버튼 클릭시 빈 input 띄우는 함수
  const handleAddButtonClick = () => {
    setIsEditing({})
    if (!isAdding) {
      setIsAdding(true)
      const newItem = {
        notodoId: Date.now(),
        content: inputValue,
        status: 0
      }
      setNotodoList([...notodoList, newItem])
      setInputValue("")
      inputRef?.current?.focus()
    }
  }

  // 성공, 실패 버튼
  const handleItemClick = (id, type) => {
    setIsEditing({})
    const newData = notodoList.map(item => {
      if (item.notodoId === id && !isAdding) {
        if (type === "successed") {
          postSuccess({ "notodoId": id })
          return item.status === 1 ? {
            ...item,
            status: 0
          } : {
            ...item,
            status: 1
          }
        } else {
          postFail({ "notodoId": id })
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

  // 리스트 누르고 있을 시
  const handleMouseDown = (id) => {
    timeoutRef.current = setTimeout(() => {
      setShowPopup(true)
      setPopupId(id)
    }, 500)
  }

  // 0.5초 이상 안 누르고 뗐을 때
  const handleMouseUp = () => {
    clearTimeout(timeoutRef.current)
    setShowPopup(false)
  }

  const handleEdit = async (id) => {
    const input = notodoList.filter(list => list.notodoId === id)[0].content

    setInputValue(input)

    if (!isEditing[id]) {
      setIsEditing({
        [id]: true
      })
    }
    setShowPopup(false)
  }

  const handleDelete = id => {
    const updatedList = notodoList.filter(list => list.notodoId !== id)
    setNotodoList(updatedList)
    setShowPopup(false)
  }

  const handleCancel = () => {
    setShowPopup(false)
  }

  const getInputWidth = useCallback(() => {
    if (!inputRef.current) {
      return
    }
    const inputValue = inputRef.current.value || ''
    const inputWidth = getTextWidth(inputValue, inputRef.current.style.font)
    inputRef.current.style.width = `${inputWidth}px`
  }, [])

  const getTextWidth = (text, font) => {
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

  return (
    <S.Div ref={divRef}>
      <S.Header>
        <div>
          <button onClick={() => navigate('/calendar')}><S.CalImg src={iconCalendar} /></button>
          <S.Logo src={Logo} />
        </div>
        <WeekPicker />
      </S.Header>
      <S.NotodoWrap>
        {
          notodoList.length ?
            [...notodoList].reverse().map(i => (
              <S.NotodoLi disabled={isEditing[i.notodoId]} key={i.notodoId} onMouseDown={(e) => { if (!isEditing[i.notodoId]) handleMouseDown(i.notodoId) }} onMouseUp={handleMouseUp}>
                <S.ContentWrap>
                  {i.content === "" || isEditing[i.notodoId] === true ? (
                    <>
                      <input type="text" value={inputValue} autoFocus onChange={handleInputChange} onBlur={handleInputBlur} onKeyDown={handleInputKeyDown} ref={inputRef} />
                    </>
                  ) :
                    <p>{i.content}</p>}
                  <p>금지</p>
                </S.ContentWrap>
                <button onClick={() => handleItemClick(i.notodoId, "successed")} ><img src={i.status === 1 ? iconUpActived : iconUpDisabled} alt="" /></button>
                <button onClick={() => handleItemClick(i.notodoId, "failed")}><img src={i.status === 2 ? iconDownActived : iconDownDisabled} alt="" /></button>
              </S.NotodoLi>
            )) : <S.Empty>새로운 낫투두리스트를 추가해 보세요!</S.Empty>
        }
      </S.NotodoWrap>
      {!showPopup &&
        <S.Footer>
          <S.ResultWrap>
            <span>{notodoList.length}</span>
            <span>{notodoList.filter(i => i.status === 1).length}</span>
            <span>{notodoList.filter(i => i.status === 2).length}</span>
          </S.ResultWrap>
          <S.AddBtn onClick={handleAddButtonClick}><img src={iconPlus} alt=""/></S.AddBtn>
        </S.Footer>}

      {showPopup && (
        <Modal width={modalWidth} onClose={handleCancel}>
          <TodoPopupMenu id={popupId} onEdit={handleEdit} onDelete={handleDelete} onCancel={handleCancel} />
        </Modal>
      )}
    </S.Div>
  )
}

export default NotodoPage;