import styled from "styled-components";

export const Div = styled.div`
  background: ${props => props.theme.bg.white};
  width: 100%;
  height: 182px;
  bottom: 0;
  max-width: 500px;
  box-shadow: 0px -4px 10px -3px rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 0 0;
  padding: 17px 0;
`

export const Btn = styled.button`
  padding: 0 32px;
  width: 100%;
  height: 50px;
  text-align: left;
  font-family: Pretendard;
  font-size: 15px;
  line-height: 19px;
  color: ${props => props.theme.text.black};
` 