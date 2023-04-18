import styled from "styled-components";

export const Div = styled.div`
  background: ${props => props.theme.bg.main};
  margin: 0 auto;
  position: relative;
  width: 100%;
  min-width: 350px;
  height: 100vh;
`

export const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 210px;
  background: ${(props) => props.theme.bg.white};
  box-shadow: 0px 10px 10px -9px rgba(0, 0, 0, 0.1);
  padding-top: 70px;
  position: sticky;
  top: 0;

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
`;

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
  width: 100%;
  height: 67px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

export const PickBtn = styled.button`
  font-family: "Gamja Flower", cursive;
  box-sizing: border-box;
  width: 49px;
  height: 67px;
  position: relative;
  box-sizing: border-box;

  & p:first-child {
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.text.gray3};
  }

  & p:nth-child(2) {
    height: 27px;
    font-size: 18px;
    line-height: 22px;
    color: ${(props) => props.theme.text.gray1};
    margin-top: 8px;
    z-index: 10;
  }

  & div {
    margin: 5px auto 0 auto;
    width: 28px;
    height: 28px;
    background: ${(props) => props.theme.action.yellow};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & p:first-child {
      color: ${(props) => props.theme.text.black};
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export const NotodoWrap = styled.ul`
  padding: 20px;
  background: ${props => props.theme.bg.main};
  margin: 0 auto;
`

export const NotodoLi = styled.li`
  height: 50px;
  border-bottom: 0.5px solid ${props => props.theme.text.gray2};
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
  width: 100%;
  display: flex;
  align-items: center;

  & > input {
    border: none;
    outline: none;
    background: transparent;
    width: 5px;
    color: ${props => props.theme.text.gray3};
    font-size: 14px;
    padding: 0;
    font-family: 'Pretendard';
  }

  & > p {
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.text.gray1};
  }

  & > p:nth-child(2) {
    margin-left: 5px;
  }
`

export const Footer = styled.div`
  width: 100%;
  height: 111px;
  background: ${(props) => props.theme.bg.white};
  padding: 10px 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  max-width: 500px;
  box-shadow: 0px -1px 8px rgba(0, 0, 0, 0.05);
`;

export const ResultWrap = styled.div`
  font-family: "Gamja Flower", cursive;
  font-size: 15px;
  color: ${(props) => props.theme.text.gray1};
  display: flex;
  gap: 17px;

  & :nth-child(1)::after {
    content: "TASKS";
    margin-left: 5px;
  }

  & :nth-child(2) {
    color: ${(props) => props.theme.action.green};
    &::after {
      color: ${(props) => props.theme.text.gray1};
      content: "SUCCESSFUL";
      margin-left: 5px;
    }
  }

  & :nth-child(3) {
    color: ${(props) => props.theme.action.red};
    &::after {
      color: ${(props) => props.theme.text.gray1};
      content: "FAILED";
      margin-left: 5px;
    }
  }
`;

export const AddBtn = styled.button`
  width: 100px;
  text-align: right;
  height: 100%;
`