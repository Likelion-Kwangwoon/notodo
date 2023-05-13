import styled from "styled-components";

export const WeekPicker = styled.div`
  box-sizing: border-box;
  height: 67px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
`;

export const PickBtn = styled.button`
  box-sizing: border-box;
  padding: 0 10px;
  position: relative;

  & p:first-child {
    font-size: 12px;
    color: ${(props) => props.theme.gray.g5};
  }

  & p:nth-child(2) {
    font-size: 14px;
    color: ${(props) => props.theme.gray.g4};
    margin-top: 13px;
  }

  & > p.pick {
    color: ${(props) => props.theme.action.white};
    &::after {
      content: "";
      position: absolute;
      padding: 15px;
      bottom: 5px;
      left: 50%;
      transform: translate(-50%);
      z-index: -10;
      background: ${(props) => props.theme.action.black};
      border-radius: 50px;
    }
  }
`;