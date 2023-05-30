import styled from "styled-components";

export const Ul = styled.ul`
  padding-top: 10px;
`;

export const Li = styled.li`
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  padding: 20px 30px 20px;
`;

export const ModalStyle = styled.div`
  background-color: ${(props) => props.theme.action.white};
  border-radius: 10px;
  padding: 30px 47px 22px;
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > p {
    font-size: 14px;

    &:last-of-type {
      margin: 5px 0 16px;
    }
  }
`;

export const ModalBtn = styled.button`
  font-size: 12px;
  padding: 8px 26px;
  border-radius: 50px;
  margin: 0 8px;
  background-color: ${(props) => props.theme.action.black};
  border: 1px solid ${(props) => props.theme.action.black};
  color: ${(props) => props.theme.action.white};

  &.sub {
    padding: 8px 18px;
    background-color: ${(props) => props.theme.action.white};
    color: ${(props) => props.theme.action.black};
  }
`;
