import styled from "styled-components";

export const StateUl = styled.ul`
  color: ${(props) => props.theme.action.black};
`;

export const StateLi = styled.li`
  margin-bottom: 8px;
  font-size: 12px;
  display: flex;
  gap: 6px;
  align-items: center;

  & > img {
    width: 18px;
    vertical-align: top;
    margin-right: 5px;
  }

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 50px;
    background-color: ${(props) => props.theme.action.red};
  }

  &:first-child::before {
    background-color: ${(props) => props.theme.action.green};
  }
`;
