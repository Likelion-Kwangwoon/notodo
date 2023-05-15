import { useSelector } from 'react-redux'
import * as S from "./style"
import { useState, useEffect, useRef, useCallback } from 'react'
import iconUpDisabled from '../../assets/icon-suc.svg'
import iconUpActived from '../../assets/icon-suc-fill.svg'
import iconDownDisabled from '../../assets/icon-fail.svg'
import iconDownActived from '../../assets/icon-fail-fill.svg'
import { postList, getContent, postSuccess, postFail, modifyNotodo, deleteNotodo, getFriendNotodo } from "../../api/api.js"
import DayState from '../DayState'
import Modal from '../Modal'
import TodoPopup from '../Popup/TodoPopup'
import { useParams } from 'react-router-dom'

export default function NotodoList({divRef}) {
  const date = useSelector(state => state.date.date)
  const [notodoList, setNotodoList] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isAdding, setIsAdding] = useState(false)
  const [isEditing, setIsEditing] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [popupId, setPopupId] = useState(null)
  const [modalWidth, setModalWidth] = useState("0px")
  const inputRef = useRef(null)
  const timeoutRef = useRef(null)
  const params = useParams()

  const fetchData = async () => {
    const data = !params.id ? await getContent(date) : await getFriendNotodo(params.id, date)
    setNotodoList(data)
  }

  useEffect(() => {
    fetchData()
  }, [date])

  useEffect(() => {
  }, [isEditing])

  useEffect(() => {
    const width = divRef.current.offsetWidth
    setModalWidth(`${width}px`)
  }, [])

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
          console.log(popupId, inputValue)
          const updatedItem = {
            "notodoId": popupId,
            "content": inputValue
          }
          await modifyNotodo(updatedItem)
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
          return {
            ...item,
            status: item.status === 1 ? 0 : 1
          }
        } else {
          postFail({ "notodoId": id })
          return {
            ...item,
            status: item.status === 2 ? 0 : 2
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

  const handleDelete = async id => {
    await deleteNotodo(popupId)
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
    <>
      <S.NotodoWrap>
        {
          notodoList.length ?
            [...notodoList].reverse().map(i => (
              <S.NotodoLi disabled={isEditing[i.notodoId]} key={i.notodoId} onMouseDown={() => { if (!isEditing[i.notodoId]) handleMouseDown(i.notodoId) }} onMouseUp={handleMouseUp}>
                <S.ContentWrap>
                  {i.content === "" || isEditing[i.notodoId] === true ? (
                    <>
                      <input type="text" value={inputValue} autoFocus onChange={handleInputChange} onBlur={handleInputBlur} onKeyDown={handleInputKeyDown} ref={inputRef} />
                    </>
                  ) :
                    <p>{i.content}</p>}
                </S.ContentWrap>
                <button disabled={!!params.id} onClick={() => handleItemClick(i.notodoId, "successed")} ><img src={i.status === 1 ? iconUpActived : iconUpDisabled} alt="" /></button>
                <button  disabled={!!params.id}  onClick={() => handleItemClick(i.notodoId, "failed")}><img src={i.status === 2 ? iconDownActived : iconDownDisabled} alt="" /></button>
              </S.NotodoLi>
            )) : <p>{!params.id ? '새로운 낫투두리스트를 추가해 보세요!' : '아직 작성된 낫투두리스트가 없어요!'}</p>
        }
      </S.NotodoWrap>
      {
        !showPopup &&
        <DayState tasks={notodoList.length} successful={notodoList.filter(i => i.status === 1).length} failed={notodoList.filter(i => i.status === 2).length} handleAddButtonClick={handleAddButtonClick} />
      }

      {
        showPopup && (
          <Modal width={modalWidth} onClose={handleCancel}>
            <TodoPopup id={popupId} onEdit={handleEdit} onDelete={handleDelete} onCancel={handleCancel} />
          </Modal>
        )
      }
    </>
  )
}