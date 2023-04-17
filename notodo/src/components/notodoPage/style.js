import styled from "styled-components";

export const Div = styled.div`
  width: 390px;
  height: 844px;
  background: #FCFCFC;
  margin: 0 auto;
`

export const Header = styled.div`
  box-sizing: border-box;
  width: 390px;
  height: 221px;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding-top: 86px;
  position: relative;

  & > div:first-child > button {
    position: absolute;
    width: 99px;
    height: 76px;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    position: relative;
  }
`

export const CalImg = styled.img`
  width: 28px;
  height: 24px;
`

export const Logo = styled.img`
  width: 95px;
  height: 42px;
  margin: auto;
`

export const WeekPicker = styled.div`
  box-sizing: border-box;
  width: 343px;
  height: 67px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`

export const PickBtn = styled.button`
  box-sizing: border-box;
  width: 49px;
  height: 67px;
  position: relative;
  box-sizing: border-box;

  & p:first-child {
    font-size: 14px;
    line-height: 18px;
    color: #B9B9B9;
  }

  & p:nth-child(2) {
    height: 27px;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-top: 8px;
    z-index: 10;
  }

  & div {
    margin: 5px auto 0 auto;
    width: 28px;
    height: 28px;
    background: #FFED95;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & p:first-child {
      color: #222222;
      font-size: 18px;
      line-height: 22px;
    }
  }
`

export const NotodoWrap = styled.ul`
  padding: 20px;
  width: 312px;
  margin: 0 auto;
`

export const NotodoLi = styled.li`
  height: 50px;
  border-bottom: 0.5px solid #D3D3D3;
  display: flex;
  align-items: center;
  padding-left: 2px;

  & > button {
    margin-right: 22px;
  }

  & > button:last-child {
    margin-right: 8px;
  }
`

export const ContentWrap = styled.div`
  width: 250px;
  display: flex;
  align-items: center;

  & > input {
    border: none;
    outline: none;
    background: transparent;
    width: 5px;
    color: #B9B9B9;
    font-size: 14px;
    padding: 0;
  }

  & > p {
    font-size: 14px;
    line-height: 17px;
    color: #666666;
  }

  & > p:nth-child(2) {
    margin-left: 5px;
  }
`

export const Footer = styled.div`
  box-sizing: border-box;
  width: 390px;
  padding: 0 0 32px 0;
  background: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 13px;
  color: #666666;

  & > div:first-child {
    width: 77px;
    margin: 0 auto;
    & > span:first-child {
      font-weight: 600;
      margin-right: 5px;
    }
  }

  & > div:nth-child(2) {
    width: 100px;
    margin: 0 auto;
    & > span:first-child {
      font-weight: 600;
      color: #A4D879;
      margin-right: 5px;
    }
  }

  & > div:nth-child(3) {
    width: 100px;
    margin: 0 auto;
    & > span:first-child {
      font-weight: 600;
      color: #F1937D;
      margin-right: 5px;
    }
  }


  & > div > span:nth-child(3) {
    
  }

  & > div > span:nth-child(5) {
    color: #F1937D;
  }
`

export const AddBtn = styled.button`
  width: 80px;
  height: 77px;
`