import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0 30px;
`

export const StateUl = styled.ul`
  color: ${(props) => props.theme.text.black};
`;

export const StateLi = styled.li`
  margin-bottom: 8px;
  
  & > img {
    width: 18px;
    vertical-align: top;
    margin-right: 5px
  }
  
  & > span {
    font-family: "Gamja Flower", cursive;
  }
`;