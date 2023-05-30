import styled from "styled-components";

export const NavWrap = styled.header`
  width: 100%;
  max-width: 500px;
  /* height: 100px; */
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: ${(props) => props.theme.action.white};
`;

export const SearchWrap = styled.div`
  margin: 50px 0 0 0;
  padding: 0 10px;
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
  justify-items: center;
  overflow: hidden;

  & > input:focus {
    border: 1px solid ${(props) => props.theme.action.black};
  }
`;

export const SearchButton = styled.button`
  padding: 15%;
  background-color: ${(props) => props.theme.action.white};
  border-radius: 22px;

  & > img {
    vertical-align: bottom;
  }
`;

export const SearchBox = styled.input`
  width: 90%;
  height: 26px;
  padding-left: 10px;
  border-radius: 32rem;
  border-color: transparent;
  background-color: ${(props) => props.theme.gray.g2};
  & ::placeholder {
    font-size: 14px;
    font-style: ${(props) => props.theme.gray.g3};
  }
`;
