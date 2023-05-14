import styled from 'styled-components';

export const NavWrap = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  background-color: ${(props) => props.theme.action.white};
  z-index: 10;
`;

export const NavUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`

export const NavLi = styled.li`
  cursor: pointer;
  font-weight: 700;
  font-size: 10px;
  padding: 15px 0 30px 0;

  & img {
    margin-bottom: 4px;
  }

  &.on {
    color: ${(props) => props.theme.action.black};
  }
  &.off {
    color: ${(props) => props.theme.gray.g3};
  }
`;