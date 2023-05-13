import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 500px;
  height: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  background-color: ${(props) => props.theme.action.white};

  &.on {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 10px -10px;
  }
`

export const Title = styled.p`
  margin: 60px 0 20px 0;
  font-weight: 700; 
  font-size: 18px;
`

export const Div = styled.div`
  margin: 57px 0 13px 0;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
  justify-items: center;
`