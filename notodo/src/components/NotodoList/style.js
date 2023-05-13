import styled from "styled-components";

export const NotodoWrap = styled.ul`
  height: calc(100vh - 210px - 111px);
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 20px;
  margin: 0 auto;
  
  ::-webkit-scrollbar {
  display: none;
  }

  & > p {
    margin-top: 100px;
    color: ${(props) => props.theme.gray.g3};
  }
`

export const NotodoLi = styled.li`
  height: 50px;
  border-bottom: 0.5px solid ${(props) => props.theme.gray.g3};
  display: flex;
  align-items: center;
  padding-left: 2px;

  &:active {
    background-color: ${(props) => props.theme.gray.g2};
  }

  & > button {
    margin-right: 22px;
  }

  & > button:last-child {
    margin-right: 8px;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  & input {
    border: none;
    outline: none;
    background: transparent;
    width: 0.1px;
    color: ${(props) => props.theme.gray.g5};
    font-size: 14px;
    padding: 0;
    font-family: "Pretendard Variable";
  }

  & > p {
    font-size: 14px;
    line-height: 17px;
    color: ${(props) => props.theme.gray.g4};
  }

  &::after {
    margin-left: 5px;
    font-size: 14px;
    line-height: 17px;
    content: "금지";
    font-family: "Pretendard Variable";
  }
`;