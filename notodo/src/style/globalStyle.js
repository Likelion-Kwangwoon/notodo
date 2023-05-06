import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    text-align: center;
    max-width: 500px;
    font-family: "Pretendard Variable";
    margin: 0 auto;
    -ms-overflow-style: none; 
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    }
  }

  button {
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  input, textarea {
    outline: none;
  }
`;