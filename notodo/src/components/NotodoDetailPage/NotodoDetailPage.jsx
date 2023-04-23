import NotodoPage from "../notodoPage/notodoPage";
import * as S from "../notodoPage/style";
import iconPlus from "../../assets/icon-plus.svg";
import iconUpActived from "../../assets/icon-up-green.svg";
import iconUpDisabled from "../../assets/icon-up-gray.svg";
import iconDownActived from "../../assets/icon-down-red.svg";
import iconDownDisabled from "../../assets/icon-down-gray.svg";
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {getContent} from "../../api/api";
import iconCalendar from "../../assets/icon-calendar.svg";
import Logo from "../../assets/logo.svg";
import WeekPicker from "../WeekPicker";

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
function NotodoDetailPage() {
    const navigate = useNavigate();
    const [notodoList, setNotodoList] = useState(data)

    const handleNotodoList = async () => {
        const response = await getContent("2023-01-03")
        console.log(response)
        setNotodoList(response)
    }

    useEffect(() => {
        handleNotodoList()
    }, [])

    return (
<div>
    <S.Div>
        <S.Header>
            <div>
                <button ><S.CalImg src={iconCalendar} /></button>
                <S.Logo src={Logo} />
            </div>
            <WeekPicker />
        </S.Header>
    <S.NotodoWrap>
    {
        notodoList.length ?
        notodoList.map(i => (
            <S.NotodoLi key={i.id}>
                <S.ContentWrap>
                    <p>{i.added}  {i.content}  </p>
                </S.ContentWrap>
                <button  ><img src={i.status.successed ? iconUpActived : iconUpDisabled} /></button>
                <button ><img src={i.status.failed ? iconDownActived : iconDownDisabled} /></button>
            </S.NotodoLi>

        ))
            : <p>잠시 기다려주세요 🥲</p>
    }
        </S.NotodoWrap>
    <S.Footer>
        <S.ResultWrap>
            <span>3</span>
            <span>123</span>
            <span>123</span>
        </S.ResultWrap>
        <S.AddBtn ><img src={iconPlus} /></S.AddBtn>
    </S.Footer>
    </S.Div>
</div>
    )
}

export default NotodoDetailPage;