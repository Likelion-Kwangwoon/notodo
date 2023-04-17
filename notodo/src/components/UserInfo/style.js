import styled from "styled-components";

export const Div = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  gap: 6px;

  & > img {
    width: 48px;
    height: 48px;
    border-radius: 50px;
    object-fit: cover;
  }
`;

export const DescWrap = styled.div`
  color: ${(props) => props.theme.text.black};

  & > p:first-child {
    font-weight: 800;
    margin-bottom: 3px;
    &::after {
      content: "님";
      font-weight: 300;
      color: ${(props) => props.theme.text.gray1};
    }
  }

  & > p:last-child {
    font-size: 10px;
  }
`;