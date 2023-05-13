import styled from "styled-components";

export const NavWrap = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.action.white};
  box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.1);
`;

export const TabNav = styled.button`
  color: ${(props) => props.theme.gray.g5};
  width: 100%;
  font-weight: 500;
  padding: 12px 0;

  &.on {
    font-weight: 700;
    color: ${(props) => props.theme.action.black};
    border-bottom: 2px solid ${(props) => props.theme.action.black};
  }
`;