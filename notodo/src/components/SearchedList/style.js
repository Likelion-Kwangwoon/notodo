import styled from "styled-components";

export const ListWrap = styled.div`
  margin: 26px 20px;

  & > div {
    position: relative;
    width: 350px;
    height: 600px;
    & > p {
      min-width: 100%;
      font-size: 14px;
      font-style: ${(props) => props.theme.gray.g4};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

export const List = styled.ul`
`