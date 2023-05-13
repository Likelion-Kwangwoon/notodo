import { Wrap } from './style'
import { useRef } from 'react'
import WeekPicker from "../../components/WeekPicker"
import NotodoList from '../../components/NotodoList'

export default function NotodoPage() {
  const divRef = useRef(null)

  return (
    <Wrap ref={divRef}>
      <WeekPicker />
      <NotodoList divRef={divRef} />
    </Wrap>
  )
}