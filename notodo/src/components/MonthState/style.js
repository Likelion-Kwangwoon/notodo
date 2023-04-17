import styled from "styled-components";

export const StateUl = styled.ul`
  color: ${(props) => props.theme.text.black};
`;

export const StateLi = styled.li`
  margin-bottom: 8px;

  & > img {
    width: 18px;
    vertical-align: top;
    margin-right: 5px;
  }

  & > span {
    font-family: "Gamja Flower", cursive;
  }
`;
