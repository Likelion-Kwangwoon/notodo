import styled from "styled-components";

export const Div = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
  min-width: 350px;
  height: 100vh;
`

export const Header = styled.div`
  box-sizing: border-box;
  padding: 16px 0 16px 0;
  width: 100%;
  background: ${(props) => props.theme.action.white};
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
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

export const NotodoWrap = styled.ul`
  height: calc(100vh - 210px - 111px);
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 20px;
  margin: 0 auto;
  
  ::-webkit-scrollbar {
  display: none;
}
`

export const NotodoLi = styled.li`
  height: 50px;
  border-bottom: 0.5px solid ${(props) => props.theme.gray.g3};
  display: flex;
  align-items: center;
  padding-left: 2px;

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

  & > input {
    border: none;
    outline: none;
    background: transparent;
    width: 0.1px;
    color: ${(props) => props.theme.gray.g5};
    font-size: 14px;
    padding: 0;
    font-family: "Pretendard";
  }

  & > p {
    font-size: 14px;
    line-height: 17px;
    color: ${(props) => props.theme.gray.g4};
  }

  & > p:nth-child(2) {
    margin-left: 5px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 111px;
  background: #F9F9F9;
  padding: 10px 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  max-width: 500px;
  box-shadow: 0px -10px 10px -10px rgba(0, 0, 0, 0.1);
`;

export const ResultWrap = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.gray.g4};
  display: flex;
  gap: 17px;
  font-weight: 700;

  & :nth-child(1)::after {
    content: "TASKS";
    margin-left: 5px;
    color: ${(props) => props.theme.gray.g1};
    font-weight: 200;
  }

  & :nth-child(2) {
    color: ${(props) => props.theme.action.green};
    &::after {
      color: ${(props) => props.theme.gray.g1};
      content: "SUCCESSFUL";
      font-weight: 200;
      margin-left: 5px;
    }
  }

  & :nth-child(3) {
    color: ${(props) => props.theme.action.red};
    &::after {
      color: ${(props) => props.theme.gray.g1};
      content: "FAILED";
      font-weight: 200;
      margin-left: 5px;
    }
  }
`;

export const AddBtn = styled.button`
  width: 100px;
  text-align: right;
  height: 100%;
`

export const Empty = styled.div`
  margin-top: 20%;
  color: ${(props) => props.theme.gray.g4};
`;