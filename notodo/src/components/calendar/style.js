import styled from "styled-components";

export const Wrap = styled.div`
  margin: 0 20px;
  min-width: 350px;
  background-color: ${(props) => props.theme.bg.white};
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  font-size: 20px;
  margin-bottom: 28px;

  & > button {
    background-color: inherit;
    border: none;
  }
`;

export const DayWrap = styled.div`
  font-family: "Gamja Flower", cursive;
  color: ${(props) => props.theme.text.gray1};
  background-color: ${(props) => props.theme.action.lgYellow};
  font-size: 14px;
  display: flex;
  flex-wrap: nowrap;
  border-top: 1px solid ${(props) => props.theme.text.gray2};
  border-bottom: 1px solid ${(props) => props.theme.text.gray2};

  & > span {
    padding: 7px 18px;
    height: 100%;
    flex-grow: 1;
    flex-basis: 0;
    border-right: 1px solid ${(props) => props.theme.text.gray2};
    &:last-child {
      border: none;
    }
  }
`;

export const RowWrap = styled.div`
  font-family: "Gamja Flower", cursive;
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  box-sizing: border-box;
  height: 92px;
`;


export const CellWrap = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  text-align: right;
  padding: 6px;
  border-right: 1px solid ${(props) => props.theme.text.gray2};
  border-bottom: 1px solid ${(props) => props.theme.text.gray2};

  & > span {
    display: block;
  }

  & > img {
    display: block;
    margin: 18px auto 0;
    width: 30px;
  }

  &:last-child {
    border-right: none;
  }

  &.disabled {
    color: ${(props) => props.theme.text.gray3};
    pointer-events: none;
  }
`;
