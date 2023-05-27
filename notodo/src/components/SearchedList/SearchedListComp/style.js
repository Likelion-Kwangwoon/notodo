import styled from "styled-components";

export const UserLi = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

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
`;

export const FollowBtn = styled.button`
  margin-left: auto;
  border-radius: 22px;
  background-color: ${(props) => props.theme.action.black};
  color: ${(props) => props.theme.action.white};
  font-weight: 500;
  padding: 7px 14px;
  line-height: 1;
  border: 1px solid ${(props) => props.theme.action.black};

  &.sub {
    color: ${(props) => props.theme.action.black};
    background-color: ${(props) => props.theme.action.white};
    box-sizing: border-box;
  }
`;

export const FollowModal = styled.div`
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
    margin-bottom: 20px;
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
