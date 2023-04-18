import styled from "styled-components";

export const WeekPicker = styled.div`
  box-sizing: border-box;
  height: 67px;
  margin: 15px auto;
  display: flex;
  justify-content: space-evenly;
`;

export const PickBtn = styled.button`
  font-family: "Gamja Flower", cursive;
  box-sizing: border-box;
  padding: 0 10px;
  position: relative;

  & p:first-child {
    font-size: 14px;
    color: ${(props) => props.theme.text.gray3};
  }

  & p:nth-child(2) {
    font-size: 18px;
    color: ${(props) => props.theme.text.gray1};
    margin-top: 10px;
  }

  & > p.pick {
    color: ${(props) => props.theme.text.black};
    &::after {
      content: "";
      position: absolute;
      padding: 15px;
      bottom: 5px;
      left: 50%;
      transform: translate(-50%);
      z-index: -10;
      background: ${(props) => props.theme.action.yellow};
      border-radius: 50px;
    }
  }
`;