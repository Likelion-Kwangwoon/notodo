import styled from "styled-components";

export const Wrap = styled.div`
  background-color: ${props => props.theme.action.white};
  border-radius: 10px;
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`

export const Inner = styled.div`
  box-sizing: border-box;
  padding: 8px 8px 20px;
  margin: 10px 10px;
  height: calc(100% - 18px);
  width: 322px;
  border: 1px solid #E3E3E3;
  border-radius: 10px;
  text-align: left;
  font-size: 13px;
  line-height: 140%;

  & > div:first-child {
    text-align: right;
  }

  & > img:nth-child(2) {
    display: block;
    margin: auto;
    margin-bottom: 23px;
  }

  & > p:nth-child(5) {
    margin: 23px 0;
  }

  & > p:nth-child(10), & > p:nth-child(12) {
    margin-bottom: 23px;
  }

  & > p:nth-child(7), & > p:nth-child(12) {
    margin-top: 5px;
  }

  & > p:nth-child(7)::before {
    content: "●";
    color: #F1937D;
    margin-right: 5px;
  }
  & > p:nth-child(8)::before {
    content: "●";
    color: #E9E9E9;
    margin-right: 5px;
  }
  & > p:nth-child(9)::before {
    content: "●";
    color: #A4D879;
    margin-right: 5px;
  }
  & > p:nth-child(10)::before {
    content: "●";
    color: #FFD400;
    margin-right: 5px;
  }

  & > p > img {
    height: 100%;
  }
`

export const Bold = styled.span`
  font-weight: 700;
  margin-bottom: 23px;
`