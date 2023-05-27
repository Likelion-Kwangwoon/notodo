import styled from "styled-components";

export const UserLi = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;

  & > img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  & > div {
    text-align: left;

    & :first-child {
      font-size: 14px;
      color: ${(props) => props.theme.action.black};
      margin-bottom: 6px;
      font-weight: 600;
    }

    & :last-child {
      font-size: 12px;
      color: ${(props) => props.theme.gray.g3};
    }
  }

  & > button {
    margin-left: auto;
  }
`;
