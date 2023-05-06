import styled, { css } from "styled-components";

export const Wrap = styled.div`
  min-width: 350px;
  padding: 0 20px;
  background-color: ${(props) => props.theme.action.white};
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  font-size: 20px;
  color: ${(props) => props.theme.action.black};
  margin-bottom: 24px;

  & > button {
    background-color: inherit;
    border: none;
  }
`;

export const DayWrap = styled.div`
  min-width: 350px;
  color: ${(props) => props.theme.gray.g4};
  font-size: 12px;
  margin-bottom: 29px;
  display: flex;
  flex-wrap: nowrap;

  & > span {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export const RowWrap = styled.div`
  min-width: 350px;
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  box-sizing: border-box;
  height: 80px;
  color: ${(props) => props.theme.action.black};
`;


export const CellWrap = styled.span`
  flex-grow: 1;
  flex-basis: 0;
  padding: 8px;
  display: block;
  z-index: 10;
  position: relative;

  &.disabled {
    color: ${(props) => props.theme.gray.g5};
    pointer-events: none;
  }

  &.today::after {
    content: "";
    position: absolute;
    top: -10px;
    width: 6px;
    height: 6px;
    right: 50%;
    transform: translate(50%);
    border-radius: 50px;
    background-color: ${(props) => props.theme.action.yellow};
  }

  &.now::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 50%;
    transform: translate(50%);
    width: 30px;
    height: 30px;
    border-radius: 50px;

    ${(props) =>
      props.bg === "red" &&
      css`
        background-color: ${(props) => props.theme.action.red};
      `}

    ${(props) =>
      props.bg === "green" &&
      css`
        background-color: ${(props) => props.theme.action.green};
      `}

      ${(props) =>
      props.bg === "gray" &&
      css`
        background-color: ${(props) => props.theme.gray.g2};
      `}
  }
`;
