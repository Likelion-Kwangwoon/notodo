import styled from "styled-components";

export const Status = styled.div`
  width: 100%;
  background: ${(props) => props.theme.action.white};
  padding: 16px 30px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  bottom: 83px;
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
    font-weight: 400;
  }

  & :nth-child(2) {
    color: ${(props) => props.theme.action.green};
    &::after {
      color: ${(props) => props.theme.gray.g1};
      content: "SUCCESSFUL";
      font-weight: 400;
      margin-left: 5px;
    }
  }

  & :nth-child(3) {
    color: ${(props) => props.theme.action.red};
    &::after {
      color: ${(props) => props.theme.gray.g1};
      content: "FAILED";
      font-weight: 400;
      margin-left: 5px;
    }
  }
`;

export const AddBtn = styled.button`
  width: 100px;
  text-align: right;
  height: 100%;
`